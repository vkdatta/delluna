export const name="cloud-arrow-down-duotone";
export const id="dl_88b5380f010f4efcb8db";
export const url=new URL("../icons/cloud-arrow-down-duotone.svg?v=365f433643fe77ab030992541d950e93063d5dab8bc5065ad9ea6f30632822ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
