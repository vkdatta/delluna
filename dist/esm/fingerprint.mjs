export const name="fingerprint";
export const id="dl_1c35151091ef4b978104";
export const url=new URL("../icons/fingerprint.svg?v=7a558c7ca003e2e00f66f4367bcad817ddd5afdbb79e917e7203f25557022e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
