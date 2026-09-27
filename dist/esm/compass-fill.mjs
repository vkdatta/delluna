export const name="compass-fill";
export const id="dl_1eb86ea8312f43759aaa";
export const url=new URL("../icons/compass-fill.svg?v=944f8ac81c99c514732407e725abfd04de154372973d8e4ac93e3769b055eb64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
