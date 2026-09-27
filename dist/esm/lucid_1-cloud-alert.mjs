export const name="lucid_1-cloud-alert";
export const id="dl_c11b1d4bf5cb497da3ff";
export const url=new URL("../icons/lucid_1-cloud-alert.svg?v=3c4de7e296f41266b6c21cfad4e49e53e3708142b20331da44c7e5c0026eb21d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
