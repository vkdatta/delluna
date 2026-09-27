export const name="speaker";
export const id="dl_569a6b26972dd2aad398";
export const url=new URL("../icons/speaker.svg?v=4a8d93c2c43511f4f38b98a90298371a63fd9be4c0d1b5068943b9b24e7f2dc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
