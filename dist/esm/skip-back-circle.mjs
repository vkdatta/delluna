export const name="skip-back-circle";
export const id="dl_0daa8593fae34888baa5";
export const url=new URL("../icons/S/skip-back-circle.svg?v=b55c088366550e174c5c22087b17974097f94e993b53973b323ae569f70f7abf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
