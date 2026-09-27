export const name="heart_minus";
export const id="dl_ea02d6faf73f14f7680d";
export const url=new URL("../icons/heart_minus.svg?v=aa9715bd4fa010ea50c2cd134edc19cbec4d470791d75e70a50d00737059d6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
