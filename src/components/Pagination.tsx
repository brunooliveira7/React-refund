import { Button } from "./Button";
import leftSvg from "../assets/left.svg";
import rightSvg from "../assets/right.svg";

type Props = {
  current: number;
  total: number;
};

export function Pagination({ current, total }: Props) {
  return (
    <div className="flex flex-1 items-center mt-6 justify-center gap-4">
      <Button variant="iconSmall">
        <img src={leftSvg} alt="Ícone de voltar" />
      </Button>
      <span className="text-gray-200 text-sm">
        {current}/{total}
      </span>
      <Button variant="iconSmall">
        <img src={rightSvg} alt="Ícone de avançar" />
      </Button>
    </div>
  );
}
