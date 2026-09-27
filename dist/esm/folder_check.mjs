export const name="folder_check";
export const id="dl_8456b4f154804c91e133";
export const url=new URL("../icons/folder_check.svg?v=9736f19f75625113be5e251b80f8af3c5f1281780dea346d310b9f7d4e2e61ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
