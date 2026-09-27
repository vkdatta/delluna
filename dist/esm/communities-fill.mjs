export const name="communities-fill";
export const id="dl_8356c88972059456bca8";
export const url=new URL("../icons/communities-fill.svg?v=9bf141c470a0ce4942244e3afa55e5df197a9afd5fb496aeef906b1167bdf354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
