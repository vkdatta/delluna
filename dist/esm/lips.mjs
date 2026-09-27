export const name="lips";
export const id="dl_35be722f7759414eaa0f";
export const url=new URL("../icons/lips.svg?v=849a99141535f699b8cebdd0caf0ff3419c1f10d3a4f528989ee9399bf4fbca0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
