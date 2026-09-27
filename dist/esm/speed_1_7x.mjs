export const name="speed_1_7x";
export const id="dl_55d0735b5b9f74acd27f";
export const url=new URL("../icons/speed_1_7x.svg?v=13009ee1470d330e09b72555ab8cb62bc1de149cd77c2b4658c2b524207146be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
