export const name="text-t-fill";
export const id="dl_915ae49d62c37540dde2";
export const url=new URL("../icons/text-t-fill.svg?v=bf0a3d53a19c9da646eaeea479b711f0211c4037e3740276370869993b0f7506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
