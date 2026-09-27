export const name="pace-fill";
export const id="dl_a49b30a7c916a0f1071d";
export const url=new URL("../icons/pace-fill.svg?v=aa90f2c236f93738a493f6d2cbb88154827c4a405ebc0b3b1cc71a113ec87484",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
