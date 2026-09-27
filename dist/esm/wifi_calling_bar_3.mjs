export const name="wifi_calling_bar_3";
export const id="dl_9fc4f6af643210fa0f0d";
export const url=new URL("../icons/wifi_calling_bar_3.svg?v=64c42730f7d29da69f6dbe792b6c53b8c129ac31be4d9660c2925cd2baceae7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
