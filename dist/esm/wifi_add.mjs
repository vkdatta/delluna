export const name="wifi_add";
export const id="dl_6f3db8baa9c52575891a";
export const url=new URL("../icons/wifi_add.svg?v=0429bc071c07dd8501307ca93edeaa872b50bb9625de54a1ec853a4e62563fd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
