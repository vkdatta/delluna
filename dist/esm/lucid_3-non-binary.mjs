export const name="lucid_3-non-binary";
export const id="dl_23350ddb45c14382b4e6";
export const url=new URL("../icons/lucid_3-non-binary.svg?v=8438e4192b12933ed3c723bc78e835f25424a542945a45dde86dcfc9664b7946",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
