export const name="key-return-light";
export const id="dl_f3fa02088b2148fe882d";
export const url=new URL("../icons/key-return-light.svg?v=ffb7d982646cd1e3f07b3f5557d328d5efbf1dc15f24f6dabf52df1a0fb049ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
