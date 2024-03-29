import { ApiProperty } from '@nestjs/swagger';
import { LessonType, SubjectType } from '@model';
import { LessonLinkResponse } from './LessonLink';

export class LessonResponse {
    @ApiProperty({ example: 1 })
    id: number;

    @ApiProperty({ example: '' })
    content: string;

    @ApiProperty({ example: SubjectType.CLEAN_CODE })
    subject: SubjectType;

    @ApiProperty({ type: [LessonLinkResponse] })
    lessonLinks: LessonLinkResponse[];

    @ApiProperty({ example: 2 })
    challengeId: number;
}
