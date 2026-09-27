export const name="magnification_large";
export const id="dl_dc792256e09b62dca524";
export const url=new URL("../icons/magnification_large.svg?v=14864eee82c6ad4b6fb5606d536720ec6a07b8a1a41a8b32d92b331279f4e120",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
