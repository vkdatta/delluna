export const name="spiral";
export const id="dl_b7d01bab50eb5ad6cb44";
export const url=new URL("../icons/spiral.svg?v=c238c0dddd05f79ed34f2ad860e98b82acc93a02db51dafe7e285a73d5f0cb84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
