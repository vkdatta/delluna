export const name="google_wifi";
export const id="dl_cd4318e5856ee547d5e8";
export const url=new URL("../icons/google_wifi.svg?v=eb837e77b9bc73b62f18276c1ee26807f07d871c45d39f344dc945fe2af00e2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
