export const name="rotate_90_degrees_ccw";
export const id="dl_2728c96bb993239085bf";
export const url=new URL("../icons/rotate_90_degrees_ccw.svg?v=76fbbe47f031d266694a24ba7073109d5a11e1fb80f8c3f6e90cd0a34ce32a7c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
