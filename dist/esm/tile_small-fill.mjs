export const name="tile_small-fill";
export const id="dl_0daa0513c3f748f2ae4b";
export const url=new URL("../icons/tile_small-fill.svg?v=ff80a481a76f3da816eb55aeedf80b9818914d0eeda9dadff6071b5785a12255",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
