export const name="threads-logo-fill";
export const id="dl_43a9fa7b536648d0fd79";
export const url=new URL("../icons/threads-logo-fill.svg?v=b8c0d0bdf97f283cb8558435302003038e086f19f5abf632072c41f6cfc67617",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
