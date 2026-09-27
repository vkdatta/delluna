export const name="request_page-fill";
export const id="dl_02caa0f23fb007aa46cc";
export const url=new URL("../icons/request_page-fill.svg?v=95510c25d89f3d749f2ec989c4c58fe67d2856607869607466b6416e9439f7f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
