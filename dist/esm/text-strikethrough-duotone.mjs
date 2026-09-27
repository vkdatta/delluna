export const name="text-strikethrough-duotone";
export const id="dl_cf24e5579584e101b323";
export const url=new URL("../icons/text-strikethrough-duotone.svg?v=33e4113bc96daf13ea07fec344b2c47d7e29e497028e9e54dd960722f9ad7db7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
