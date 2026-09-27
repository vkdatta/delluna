export const name="print_add-fill";
export const id="dl_4463c5f0a3c936567c3a";
export const url=new URL("../icons/print_add-fill.svg?v=1d19785095f1e413b973d79e9d708e01050a982da495b51d8be9b2f7e8adb9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
