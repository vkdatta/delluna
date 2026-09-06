export const name="prohibit";
export const id="dl_e463e9a5d9a647bd8add";
export const url=new URL("../icons/prohibit.svg?v=7dab6c9d295b578a7ec5df0b21c2e5ee56869ccd76ea23e2696d74fa7ae5be59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
