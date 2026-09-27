export const name="cube";
export const id="dl_1ba8fbc8a96045c6ac8e";
export const url=new URL("../icons/cube.svg?v=9da1614af3c8a5145dc2d149fb33356acae1455320b15dc25c8eb6da9ead4d59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
