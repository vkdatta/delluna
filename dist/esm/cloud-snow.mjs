export const name="cloud-snow";
export const id="dl_ce6ce756b8b24696a394";
export const url=new URL("../icons/cloud-snow.svg?v=6d84078e3d0c9d64209c2eef942fc2841085bf19af0a1af907b3f14d8b440520",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
