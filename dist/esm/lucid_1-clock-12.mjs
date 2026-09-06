export const name="lucid_1-clock-12";
export const id="dl_259ef765944146eba3a8";
export const url=new URL("../icons/lucid_1-clock-12.svg?v=ef3d5bbec6f6948d6a4565b7e19a72194a81bbde06eaba44d508e8441a92f84b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
