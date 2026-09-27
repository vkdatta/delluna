export const name="lucid_3-navigation-2-off";
export const id="dl_dabea2a0c8a4405e829f";
export const url=new URL("../icons/lucid_3-navigation-2-off.svg?v=d8e93563d7e7264ddb1e7a711447be9c5217b9fc7bd3bf7a2d1060b750950801",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
