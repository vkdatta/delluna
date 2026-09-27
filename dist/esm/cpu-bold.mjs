export const name="cpu-bold";
export const id="dl_6aa218a2f4594856877b";
export const url=new URL("../icons/cpu-bold.svg?v=8e9dcb0821404c2451182c7cc00d8b87ba8ec16840334f25c4aaf7eccfcf9fea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
