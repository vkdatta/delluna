export const name="notification_add";
export const id="dl_fc33eb08a26b59bf90dc";
export const url=new URL("../icons/notification_add.svg?v=f58606d521ce4073a36ec611b91f50f26d25c4b2ca5c0e4201ec2ff816a6b77e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
