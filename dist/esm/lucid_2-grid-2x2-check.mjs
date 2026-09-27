export const name="lucid_2-grid-2x2-check";
export const id="dl_aec91f53ecf74648b9ea";
export const url=new URL("../icons/lucid_2-grid-2x2-check.svg?v=05668dfb39bd1ab7d35ae85628aa53d1553830ed796056bcb9caa9fe1749e6ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
