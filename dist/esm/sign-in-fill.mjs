export const name="sign-in-fill";
export const id="dl_5384a9c14fe40e287f18";
export const url=new URL("../icons/sign-in-fill.svg?v=93c28d4c847a9f13c11d995ad119d8c038a9636c563324b15779ebaa5a354c7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
