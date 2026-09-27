export const name="float_portrait_2";
export const id="dl_4559a05a6c391a396b64";
export const url=new URL("../icons/float_portrait_2.svg?v=89d3a88d3e73fb3733bd1df0dd80387a990fadc0e7c37588bdbd6e75c861ad84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
