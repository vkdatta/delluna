export const name="highlighter_size_4";
export const id="dl_5b429048fd890f2542fd";
export const url=new URL("../icons/highlighter_size_4.svg?v=f8c16e62c6af9ce797899056acb282400463fbfb1cd7b8f2c482ee41b55a269c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
