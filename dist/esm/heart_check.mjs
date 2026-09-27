export const name="heart_check";
export const id="dl_ee512e8942a7a97b5cf7";
export const url=new URL("../icons/heart_check.svg?v=0f7f29aa9a5ce5bbeb5f0f3dce45de5370fc6cc0919edbb7f962b3951db80ad3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
