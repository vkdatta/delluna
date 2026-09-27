export const name="lucid_1-car-taxi-front";
export const id="dl_5b980de3ac9147c799c4";
export const url=new URL("../icons/lucid_1-car-taxi-front.svg?v=e0f497e16392c482e36c2e37a713d6c87a38f8dc29f37623af739e0231c97905",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
