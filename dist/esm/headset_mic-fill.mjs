export const name="headset_mic-fill";
export const id="dl_0c93a72703502cfaa53a";
export const url=new URL("../icons/headset_mic-fill.svg?v=21b194986a7fe1fbe1478beb3c93448e8856003bdbb77e1ee20e6c6d02e60fb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
