export const name="chromecast_device-fill";
export const id="dl_41e77e592cf8fa8d7eed";
export const url=new URL("../icons/chromecast_device-fill.svg?v=df6524ef60abc0f1030c3373f5accca2acad51b950e63111a05b43781d50295f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
