export const name="mobile_hand_left_off-fill";
export const id="dl_2f6b29dad33d9927e0e9";
export const url=new URL("../icons/mobile_hand_left_off-fill.svg?v=aeb808fedde5a9e77ed53ca4281db46cf8bc5ac23505400425808fd70d506830",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
