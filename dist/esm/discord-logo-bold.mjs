export const name="discord-logo-bold";
export const id="dl_d5531d749d5f476f86a2";
export const url=new URL("../icons/discord-logo-bold.svg?v=f3ff7b9a0cb1e285bc79959c2344e8e99f7f892402b2257af5667f86e7e1eb8e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
