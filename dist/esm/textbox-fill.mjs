export const name="textbox-fill";
export const id="dl_6ef634e5b5fccd050d31";
export const url=new URL("../icons/textbox-fill.svg?v=b42f7f8a23e1f4a1fab98398cdcac0a09b52b9b8751c6fa0d4f1bdac24c800d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
