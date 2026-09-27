export const name="smart_outlet-fill";
export const id="dl_dc4d97eeadf185f7a762";
export const url=new URL("../icons/smart_outlet-fill.svg?v=6117d7f6ef19b729aa8fc95e67ad8d75e8e740e1662f72af29c212d52f9b9bb9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
