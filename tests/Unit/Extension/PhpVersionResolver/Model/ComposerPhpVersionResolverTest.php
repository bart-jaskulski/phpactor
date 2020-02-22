<?php

namespace Phpactor\Tests\Unit\Extension\PhpVersionResolver\Model;

use PHPUnit\Framework\TestCase;
use Phpactor\Extension\Php\Model\ComposerPhpVersionResolver;
use Phpactor\Tests\IntegrationTestCase;

class ComposerPhpVersionResolverTest extends IntegrationTestCase
{
    public function testReturnsPlatform()
    {
        $this->workspace()->reset();
        $this->workspace()->loadManifest(<<<'EOT'
// File: composer.json
{
    "require": {
        "php": "^7.1"
    }
}
EOT
        );
        $resolver = new ComposerPhpVersionResolver($this->workspace()->path('/composer.json'));
        self::assertEquals('7.1', $resolver->resolve());
    }

    public function testReturnsPlatformWithHigherPrio()
    {
        $this->workspace()->reset();
        $this->workspace()->loadManifest(<<<'EOT'
// File: composer.json
{
    "require": {
        "php": "^7.1"
    },
    "config": {
        "platform": {
            "php": "7.3"
        }
    }
}
EOT
        );
        $resolver = new ComposerPhpVersionResolver($this->workspace()->path('/composer.json'));
        self::assertEquals('7.3', $resolver->resolve());
    }
}