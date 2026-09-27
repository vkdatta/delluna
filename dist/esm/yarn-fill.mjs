export const name="yarn-fill";
export const id="dl_1a1e702ea3aa8d779259";
export const url=new URL("../icons/yarn-fill.svg?v=eac4572b9f3c1a7511b51cb0943412fdfca9ca695bde250655af6b9c0ecf01cd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
