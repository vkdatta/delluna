export const name="dots-three-outline-vertical-duotone";
export const id="dl_b96bb4be00ec44ab94d0";
export const url=new URL("../icons/dots-three-outline-vertical-duotone.svg?v=b5b49ff07066734708e286a86d263b1c291ccf6f3f06b347eadeb671cfbf1784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
