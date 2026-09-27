export const name="tty-fill";
export const id="dl_660036c278721a130329";
export const url=new URL("../icons/tty-fill.svg?v=dd05e0754194638db783e356ea79d37c9d7281c72ad5e85dc389f4750af87f06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
