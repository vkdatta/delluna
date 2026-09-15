export const name="cleaning";
export const id="dl_d442fe68f1834d92a0d9";
export const url=new URL("../icons/C/cleaning.svg?v=ccbc31f78d68417f468d0d299e4cea1c2718f7337865c6e2b53edbb74f5e9cf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
