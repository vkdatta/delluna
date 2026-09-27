export const name="podium-fill";
export const id="dl_98ee2ae113b94bc3ad0f";
export const url=new URL("../icons/podium-fill.svg?v=e56b38ff0232ed5e19150638a9375073d5ddb687aba52b662ab4325b96c7596b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
