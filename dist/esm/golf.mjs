export const name="golf";
export const id="dl_c913571b864a4d33be51";
export const url=new URL("../icons/golf.svg?v=350946a9b07186de0e5da2f9686a42951bc92444a7c38e57ab13adb417c856b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
