export const name="mystery";
export const id="dl_25c88202bdcd05bca583";
export const url=new URL("../icons/mystery.svg?v=0a989397c1503fba5ae6df3a56546713e26b6c8b3b9079554680fcfa8bf419fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
