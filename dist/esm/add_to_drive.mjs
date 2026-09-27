export const name="add_to_drive";
export const id="dl_7566dce2ac23cd4c6fda";
export const url=new URL("../icons/add_to_drive.svg?v=b5a016a3a172a63075e0ff704c2b9090d19d2662c10898e1ffc9d8fa0b4ce099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
