export const name="arrow-bend-down-right-light";
export const id="dl_6864e7d17bf64648ba3c";
export const url=new URL("../icons/arrow-bend-down-right-light.svg?v=f4def18b1e450d0063afe9feb514695adffc372a8cff73938ba6331c4a5a2d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
