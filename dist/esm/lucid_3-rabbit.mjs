export const name="lucid_3-rabbit";
export const id="dl_4483d0b073cf4174bf78";
export const url=new URL("../icons/lucid_3-rabbit.svg?v=a4393f0f578fae3497f55a27f252c05255102c97d46786ea921c6e75558be86b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
