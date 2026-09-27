export const name="arrow-u-right-up-duotone";
export const id="dl_d77d1a4eaa664923980e";
export const url=new URL("../icons/arrow-u-right-up-duotone.svg?v=4df99e39c98eb6d233140e0f425543244427a07b64dacdc9eacf555741da184f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
