export const name="stadia_controller-fill";
export const id="dl_a86a9b48f712062b8de7";
export const url=new URL("../icons/stadia_controller-fill.svg?v=9b79ac32c6a145e9c1797a8d32b3614de640379c42b4d26f862e154ab6a2c750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
