export const name="front_hand-fill";
export const id="dl_b52de43807bfd24a6e89";
export const url=new URL("../icons/front_hand-fill.svg?v=aeda9f22375f6539b1676fc70c324c3320a87129ab311e49ca66559cf11a22dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
