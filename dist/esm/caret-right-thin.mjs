export const name="caret-right-thin";
export const id="dl_b11577132a2245598cef";
export const url=new URL("../icons/caret-right-thin.svg?v=8ce46700e3c503e972df9b70e6695f2594d04a848d4388fcc0d0764fc2cd97c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
