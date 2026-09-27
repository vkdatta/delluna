export const name="king_bed-fill";
export const id="dl_2b6f5291b791e8cff70e";
export const url=new URL("../icons/king_bed-fill.svg?v=f8460a725557512fdf09a76c5b33bf8291712c9bf91c722a852367e5c3767f4b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
