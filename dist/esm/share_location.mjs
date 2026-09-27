export const name="share_location";
export const id="dl_30976159452091916244";
export const url=new URL("../icons/share_location.svg?v=18c080588571224dd1fed141f1b13993504a8996cf9a9ac0393ae9d139d9ac3c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
