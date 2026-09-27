export const name="ladder-simple";
export const id="dl_22a838da40304b078572";
export const url=new URL("../icons/ladder-simple.svg?v=808e128e0a8a644f531e60d01dc5190acf91c24a6c3da01f01d5f5e0c90fde9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
