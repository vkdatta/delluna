export const name="user-focus-fill";
export const id="dl_bbbc2f34169fe67e5acc";
export const url=new URL("../icons/user-focus-fill.svg?v=8e92d821d6018c4f7d171671ab04e4ed149775dbe272ccced7451a5ec61b568e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
