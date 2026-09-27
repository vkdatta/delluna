export const name="codesandbox-logo-light";
export const id="dl_f6d1e163f23a4637a24c";
export const url=new URL("../icons/codesandbox-logo-light.svg?v=cedf004f6bbd9fe7cb487209fc5e147a96c2c252561b5f20009195eebe192a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
