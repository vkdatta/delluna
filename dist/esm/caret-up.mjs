export const name="caret-up";
export const id="dl_19d84e9ae342473d9b1c";
export const url=new URL("../icons/caret-up.svg?v=679c58f4898be7f9ed960828b9a19eef68d63669262b30231eaa33107badee57",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
