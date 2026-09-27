export const name="squares-four";
export const id="dl_171d0bf4116e87f6abab";
export const url=new URL("../icons/squares-four.svg?v=f297d97d4e0204d83de41a1e78e0309e816dc23d3b30a4f742761c9276cd71e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
