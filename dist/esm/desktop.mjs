export const name="desktop";
export const id="dl_9aee8ae259a84751a669";
export const url=new URL("../icons/desktop.svg?v=3d58b584ec11c2b45f267672de5c7ae4cc00b6cfeb4b728285677bcb84713744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
