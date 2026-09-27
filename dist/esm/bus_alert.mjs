export const name="bus_alert";
export const id="dl_12f55d513c9f1dad6178";
export const url=new URL("../icons/bus_alert.svg?v=07e69c2f479285d74aad0e7ef9aced9df8e997292bc5df3318b1fde228814ed5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
