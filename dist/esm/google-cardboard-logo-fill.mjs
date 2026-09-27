export const name="google-cardboard-logo-fill";
export const id="dl_fbfa308a4e044acdb538";
export const url=new URL("../icons/google-cardboard-logo-fill.svg?v=46578aac95898b0c4079841ad51818dd5ced8e15b054051c3088c3a4d3dcabec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
