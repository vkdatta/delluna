export const name="mobile_gear-fill";
export const id="dl_440bfd14211d662e3532";
export const url=new URL("../icons/mobile_gear-fill.svg?v=c9db2e096e239f6f8f713895c66776a5b38ef657b731800f748bbcbe401e7064",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
