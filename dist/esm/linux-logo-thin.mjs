export const name="linux-logo-thin";
export const id="dl_7584c7204f0e480b9273";
export const url=new URL("../icons/linux-logo-thin.svg?v=b24d44c2074661e6755eb563a40cd72bc1eccc129ee9659e8ac4cabe13abc7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
