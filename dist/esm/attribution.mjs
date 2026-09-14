export const name="attribution";
export const id="dl_f1a305f478864409941e";
export const url=new URL("../icons/A/attribution.svg?v=096cdc9bd728d3343b0bfc096e70ff79b768eb452aceb03005c1a217b72696ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
