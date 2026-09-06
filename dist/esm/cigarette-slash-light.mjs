export const name="cigarette-slash-light";
export const id="dl_7ddc94b9a6024fca93c1";
export const url=new URL("../icons/cigarette-slash-light.svg?v=80db76790c78c09a2b5da244ee30f07d87b599388e7f6c7ec34a484ebef8a31e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
