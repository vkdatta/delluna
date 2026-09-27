export const name="soap";
export const id="dl_d4d21780d2bbbfb1cca4";
export const url=new URL("../icons/soap.svg?v=384cdb1bbd3bfed2b83c763be5d508eac69235156adb68cd10c151c372bf7bc6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
