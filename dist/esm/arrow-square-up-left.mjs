export const name="arrow-square-up-left";
export const id="dl_a8f1fea54774477fb7b2";
export const url=new URL("../icons/arrow-square-up-left.svg?v=01bc2043d0c7ae8d33e227e9507d8717d8a6e327170d5722d5304e83ff52acfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
