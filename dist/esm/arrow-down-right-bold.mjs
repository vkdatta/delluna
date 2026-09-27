export const name="arrow-down-right-bold";
export const id="dl_1e315d461f804aceb71c";
export const url=new URL("../icons/arrow-down-right-bold.svg?v=9b415099c3ef0aa19265b5057d2a7aef58b7c15308151b23c1b21ad57d100ab7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
