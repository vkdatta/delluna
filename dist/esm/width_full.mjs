export const name="width_full";
export const id="dl_8b77e98bb577e6b00163";
export const url=new URL("../icons/width_full.svg?v=42df9af7f24683c1854e798a87e00e46dc7b439c133b60fd3e1d6455f9688c0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
