export const name="chromecast_device";
export const id="dl_7a2fb46839292d15a414";
export const url=new URL("../icons/chromecast_device.svg?v=97c3e8f9205ee8ddff269c4e076af84265b844c5ea66465cd30aca5cc5292536",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
