export const name="number-square-three";
export const id="dl_827bd0b2e5a24b1d8944";
export const url=new URL("../icons/number-square-three.svg?v=36e797789499528147d6cd74892a3e6b30ec7755f25db0f32c2b159526d39c3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
