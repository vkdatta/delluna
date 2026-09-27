export const name="read-cv-logo-light";
export const id="dl_378dae56d5ad4bfa85fc";
export const url=new URL("../icons/read-cv-logo-light.svg?v=59180b810fb8543ceb4a1d4e1e586a218fc01d9739ae37b19ecf2b734811dc40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
