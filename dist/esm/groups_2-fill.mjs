export const name="groups_2-fill";
export const id="dl_398d5640bd4dd3acbff7";
export const url=new URL("../icons/groups_2-fill.svg?v=e850eb6b1e8f681643472475aa7523061935a1a4f3e88d6db4bcf71ee70cc990",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
