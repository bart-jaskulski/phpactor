<?php

namespace Phpactor\CodeTransform\Tests\Adapter\TolerantParser\Refactor;

use Exception;
use Generator;
use Phpactor\CodeTransform\Adapter\TolerantParser\Refactor\WorseInlineExpression;
use Phpactor\CodeTransform\Domain\SourceCode;
use Phpactor\CodeTransform\Tests\Adapter\TolerantParser\TolerantTestCase;
use Phpactor\CodeTransform\Tests\Adapter\WorseReflection\WorseTestCase;
use Phpactor\TextDocument\ByteOffset;
use Phpactor\TextDocument\TextDocumentBuilder;

class WorseInlineExpressionTest extends WorseTestCase
{
    /**
     * @dataProvider provideInlineExpression
     */
    public function testInlineExpression(string $test, string $name, ?string $expectedExceptionMessage = null): void
    {
        [$source, $expected, $offsetStart, $offsetEnd] = $this->sourceExpectedAndOffset(__DIR__ . '/fixtures/' . $test);

        $worseSourceCode = TextDocumentBuilder::fromPathAndString('file:///source', $source);
        $reflector = $this->reflectorForWorkspace($worseSourceCode);

        if ($expectedExceptionMessage) {
            $this->expectException(Exception::class);
            $this->expectExceptionMessage($expectedExceptionMessage);
        }

        $extractMethod = new WorseInlineExpression($reflector);

        $sourceCode = SourceCode::fromStringAndPath($source, 'file:///source');

        $transformed = $extractMethod->inlineExpression(
            TextDocumentBuilder::create($source)->build(),
            ByteOffset::fromInt($offsetStart)
        )->apply($source);

        $this->assertEquals(trim($expected), trim($transformed));
    }

    public function provideInlineExpression(): Generator
    {
        yield 'no op' => [
            'inlineExpression1.test',
            'foobar',
        ];
    }
}
