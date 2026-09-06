export const name="lucid_3-move-diagonal-2";
export const id="dl_0d1a7bace9f74b90aa27";
export const url=new URL("../icons/lucid_3-move-diagonal-2.svg?v=2998fbf8a031caa914b010ea76bd2d61e4dadc8d3913143ed133373f1e4a5b79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
