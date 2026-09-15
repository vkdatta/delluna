export const name="cognition_2-fill";
export const id="dl_a020e9ce733a4dcc849b";
export const url=new URL("../icons/C/cognition_2-fill.svg?v=d6282545b3bc91b6dfa728dcba34b7824ebe6b4d09d0add949dd945b36c6e6ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
