export const name="network_wifi_2_bar-fill";
export const id="dl_c495b481439371d0bc96";
export const url=new URL("../icons/network_wifi_2_bar-fill.svg?v=0e09799fc04eb63bdefccfe22acb95c8d0704c68f1f51ee4d6b45356f62c8380",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
