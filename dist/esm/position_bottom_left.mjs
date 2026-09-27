export const name="position_bottom_left";
export const id="dl_213905eda964391b9140";
export const url=new URL("../icons/position_bottom_left.svg?v=2ffbd0c85414f3d1b61f4ad729d3d8e38ff0636e063d1ad59ea7dcd118450788",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
