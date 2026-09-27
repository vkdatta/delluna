export const name="cursor-light";
export const id="dl_21f3e8384c964453a283";
export const url=new URL("../icons/cursor-light.svg?v=23226ad97e1c54e75c88faa1963687a5737d9dc8e4898cfa5079f18902ea81ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
