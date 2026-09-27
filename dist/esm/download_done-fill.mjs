export const name="download_done-fill";
export const id="dl_cfee4ece03d9e66b693e";
export const url=new URL("../icons/download_done-fill.svg?v=014ad3591f2516df8590b0f7c6d7fadcf903b39973a5660518124b79fce189c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
