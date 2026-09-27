export const name="zodiac-sagittarius";
export const id="dl_312f89347c7644819dcf";
export const url=new URL("../icons/zodiac-sagittarius.svg?v=9835dec1b692dd6c840b2c34d4af3dd62b945ad5c2d5c58a3d893b6b620c27d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
