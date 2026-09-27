export const name="exclude-bold";
export const id="dl_1fa9a1b614af4d98bee6";
export const url=new URL("../icons/exclude-bold.svg?v=ccf76eaa2b79a6c32af04d945bd17d6532d25aaecc315ca3090c04d3f4857769",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
