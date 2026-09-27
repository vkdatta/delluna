export const name="switch_access_3";
export const id="dl_9e36ace84895dff28c44";
export const url=new URL("../icons/switch_access_3.svg?v=3f4a16fdcecc3bdcb1dd2b071d7166ece1fa2e6e7546cc3bcfce76ee0b5a89af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
