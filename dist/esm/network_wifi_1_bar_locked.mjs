export const name="network_wifi_1_bar_locked";
export const id="dl_e09d2a84905ad74305cf";
export const url=new URL("../icons/network_wifi_1_bar_locked.svg?v=5c377a896655221e4b05aa3c8de0891324a77174f3906381bcee37ea0a430101",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
