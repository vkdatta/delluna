export const name="user-round-minus";
export const id="dl_8eb816fcad7c4a9c9ea1";
export const url=new URL("../icons/user-round-minus.svg?v=ffddb20f24bcaa3b9fb1860830f66f6ed6fc492127c26a5dba2e858dd2d424ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
