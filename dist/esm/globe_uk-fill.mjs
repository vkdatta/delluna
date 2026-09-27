export const name="globe_uk-fill";
export const id="dl_b1f298f6e429df30c7ad";
export const url=new URL("../icons/globe_uk-fill.svg?v=96426ae71db4f788566c3dba4ee4394c0d127be4881403f65faf1a6ed31382df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
