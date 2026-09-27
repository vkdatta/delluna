export const name="wifi_home";
export const id="dl_c90f751535ff030186db";
export const url=new URL("../icons/wifi_home.svg?v=ce4248d0cb61013ca1a84ddaa96a8cfae80cf714bbfdec66a7af37873bcc4f79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
