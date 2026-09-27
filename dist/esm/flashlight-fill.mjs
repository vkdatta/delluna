export const name="flashlight-fill";
export const id="dl_b375f4d372f74a51abca";
export const url=new URL("../icons/flashlight-fill.svg?v=91a027dd82fe6262537786b39fba7d81ad08879d7b3b908136910bb0982efdda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
