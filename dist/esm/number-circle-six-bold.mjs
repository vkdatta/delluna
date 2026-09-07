export const name="number-circle-six-bold";
export const id="dl_70e4c8eab7534702a90c";
export const url=new URL("../icons/number-circle-six-bold.svg?v=1612f2eaa8eaafe7b8e9f9ec8018ceefd1a405cf3536e1d30cf6e43b5dea772b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
