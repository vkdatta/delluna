export const name="lucid_1-chevrons-left-right-ellipsis";
export const id="dl_66dfad4ff0724e80a58e";
export const url=new URL("../icons/lucid_1-chevrons-left-right-ellipsis.svg?v=8d0a51086fbfeef56b9e925cdda40fccf343c14f78d34e9dc0f107c391b40513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
