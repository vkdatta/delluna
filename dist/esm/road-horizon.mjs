export const name="road-horizon";
export const id="dl_b573c40c4fa645179076";
export const url=new URL("../icons/road-horizon.svg?v=f36acce30d14c2885a5465d6821b4da14c92acbc42c334e280f8cc6a873f8558",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
