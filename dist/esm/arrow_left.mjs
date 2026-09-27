export const name="arrow_left";
export const id="dl_ea2fbd041e1536844ac4";
export const url=new URL("../icons/arrow_left.svg?v=9752d46403d66bd912c501a9d320faed658a1eb97dbda312a6657d99d37700d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
