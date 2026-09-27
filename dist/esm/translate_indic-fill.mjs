export const name="translate_indic-fill";
export const id="dl_635adb38e8db38a7c22c";
export const url=new URL("../icons/translate_indic-fill.svg?v=e62b789d0188174fce9e4ad62ba7aa4bef32985ebdfe6fc5d5bd52d949e6d446",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
