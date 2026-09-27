export const name="text-h-four-thin";
export const id="dl_c2c2251c2efa8a564da6";
export const url=new URL("../icons/text-h-four-thin.svg?v=c9913243a182333b72587e6d86424fad8b3cafc0292659d5030acb728ed314fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
