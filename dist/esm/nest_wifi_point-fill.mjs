export const name="nest_wifi_point-fill";
export const id="dl_d99b29c4b30dc6915cba";
export const url=new URL("../icons/nest_wifi_point-fill.svg?v=2755981a8860d3911cbc78882fc1591bb8c7aee1f21c8694d2b55db03fc9cbcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
