export const name="number-square-five-bold";
export const id="dl_8008998795b84b0fbda0";
export const url=new URL("../icons/number-square-five-bold.svg?v=13dad30c2a86c8df2bbfb642501a9085530d31f9e69921c0f6ea616095a39a9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
