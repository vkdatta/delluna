export const name="stop-bold";
export const id="dl_46bcff1d02bf4b58bc81";
export const url=new URL("../icons/S/stop-bold.svg?v=27afd1f52290a911e580737ec1bb947a18d1ea50d41ab3caf7723ba1dd329d0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
