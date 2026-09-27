export const name="rainbow-thin";
export const id="dl_3b017afd06054625b3a7";
export const url=new URL("../icons/rainbow-thin.svg?v=09f8c0413d2d918e8c51088d28dab7a55e64d1aafeb01c5374e7cfd3102f24bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
