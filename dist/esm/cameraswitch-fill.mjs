export const name="cameraswitch-fill";
export const id="dl_36eb65dc98a28c28860e";
export const url=new URL("../icons/cameraswitch-fill.svg?v=915c87ad3a6fa9636ad35bc406acf94b6c3baec96d8fe7d7d1785dbd56822db7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
