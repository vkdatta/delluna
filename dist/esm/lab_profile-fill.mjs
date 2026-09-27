export const name="lab_profile-fill";
export const id="dl_c8841bd72f602b0ef0f6";
export const url=new URL("../icons/lab_profile-fill.svg?v=49574424a78db95b8bdbff2e4c94dbf9dedb5cace4062c26c9c41ba34ed3dc2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
