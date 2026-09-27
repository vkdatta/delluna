export const name="person-thin";
export const id="dl_9233db67fb2748489f9e";
export const url=new URL("../icons/person-thin.svg?v=5354c6fd03392e0ca222a8171a480e1656824e526e82b65a945bcff5f0fcd5b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
