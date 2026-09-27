export const name="lucid_3-map-pin-house";
export const id="dl_f44c75fa5baa4473a90a";
export const url=new URL("../icons/lucid_3-map-pin-house.svg?v=df233928740bb0d46574241732b87778462d9c284731b82046627371886ccaf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
