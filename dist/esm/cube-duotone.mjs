export const name="cube-duotone";
export const id="dl_4a28d6e66741431cb33a";
export const url=new URL("../icons/cube-duotone.svg?v=5580981eaad19c468a867477307a05aa8f1c37744839b280a80bef7f50b29456",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
