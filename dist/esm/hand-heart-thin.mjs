export const name="hand-heart-thin";
export const id="dl_f337eb0b936140edace5";
export const url=new URL("../icons/hand-heart-thin.svg?v=4da2563588dc21618847a69bcb31beecc3791e87c1ced33701fc5d5b8b0674a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
