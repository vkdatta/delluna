export const name="eye-closed-fill";
export const id="dl_7d7490a9595043ce8e35";
export const url=new URL("../icons/eye-closed-fill.svg?v=9a7a5716246ccef80115bc6d414b6c0a23ad9d8f2963da1097e8ff1d81793a79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
