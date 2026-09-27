export const name="star-four-light";
export const id="dl_2cdd942c59518d20ebb4";
export const url=new URL("../icons/star-four-light.svg?v=8eeb10c87235093ea4728fa57e6e3a0be412ed0f4a7db15b7324bfbe817ead98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
