export const name="scooter-light";
export const id="dl_aa29eec8bd5e10bb43e9";
export const url=new URL("../icons/scooter-light.svg?v=10616755a9061f2bcc250c5c987b6deb00bad6c5fee5eeda03f1610b38a03cee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
