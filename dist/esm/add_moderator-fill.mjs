export const name="add_moderator-fill";
export const id="dl_d35e40168ee0b0bfa26f";
export const url=new URL("../icons/add_moderator-fill.svg?v=335130d994f25d6e25bfef5f2ae2584714451f5320d4d160de2011fbf0ef7ab9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
