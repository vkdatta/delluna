export const name="auto_towing";
export const id="dl_38ffbebaeaac49dc904d";
export const url=new URL("../icons/auto_towing.svg?v=73260ca3478f1f04fc2ec2ffa92ed17fd629c015d5adb9b30e0877098f803d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
