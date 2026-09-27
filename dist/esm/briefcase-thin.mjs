export const name="briefcase-thin";
export const id="dl_97751cf85f7f43089388";
export const url=new URL("../icons/briefcase-thin.svg?v=d00d73889865ee44301b194457938c8d411acc97bc9ad1c420463713904d3412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
