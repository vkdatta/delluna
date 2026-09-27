export const name="corners-in-thin";
export const id="dl_596b893478224dacbc67";
export const url=new URL("../icons/corners-in-thin.svg?v=a51cb2922ef6f1da50952f1123939fd56c3d5c4bed6ed76f591ecdeb5465a506",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
