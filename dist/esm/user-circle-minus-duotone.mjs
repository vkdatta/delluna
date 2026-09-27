export const name="user-circle-minus-duotone";
export const id="dl_01f69f2272650a620e60";
export const url=new URL("../icons/user-circle-minus-duotone.svg?v=a02a2dee95e13cb10a459711aa9b971e17f1e89b3ea37bb67a7e4829665eef14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
