export const name="superset-of";
export const id="dl_87c79e11225176567e2f";
export const url=new URL("../icons/superset-of.svg?v=04141d44fb98603b85db992d0d91d50f5e57e157b6748d07f52e4e85b772f31b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
