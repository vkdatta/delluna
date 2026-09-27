export const name="triangle-dashed-bold";
export const id="dl_7083ca1e3dac41d57853";
export const url=new URL("../icons/triangle-dashed-bold.svg?v=995885b5bd6b938a0bc334d2c3c34da304249a0a4d46104567d07fd4f659b660",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
