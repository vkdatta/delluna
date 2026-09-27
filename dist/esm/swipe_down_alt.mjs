export const name="swipe_down_alt";
export const id="dl_bb45088bfaa974f045bf";
export const url=new URL("../icons/swipe_down_alt.svg?v=f70a51fa8267e53fc69552e94b3dba91e047bac705c4f9f160562c44625d3778",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
