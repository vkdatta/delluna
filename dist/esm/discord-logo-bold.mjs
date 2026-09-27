export const name="discord-logo-bold";
export const id="dl_d5531d749d5f476f86a2";
export const url=new URL("../icons/discord-logo-bold.svg?v=b358e855fe043d34fd9e5acff4f9a98c435c5ad3cc7e838b7aac2da5a2a4e2f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
