export const name="library_add_check-fill";
export const id="dl_feffdd54392ed9e218d2";
export const url=new URL("../icons/library_add_check-fill.svg?v=69c8e3c182b8e4882ad5497ebd76cc2a0b85fd0c4a2cac221839dcad197dcb3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
