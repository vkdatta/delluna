export const name="speaker-simple-high";
export const id="dl_b090968b30a7738d773e";
export const url=new URL("../icons/speaker-simple-high.svg?v=1a6a1356bd42307fb6a97bb390c2bb5b44a03d39e57aec5b122fef39bfb590b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
