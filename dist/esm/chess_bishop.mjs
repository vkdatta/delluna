export const name="chess_bishop";
export const id="dl_5e9aeeb2e4f6f42fbe82";
export const url=new URL("../icons/chess_bishop.svg?v=5f76b94bd517c3d3f4fb737a2c16e98adb1938cb3609066f101c816ad0d2e63a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
