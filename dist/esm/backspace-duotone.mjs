export const name="backspace-duotone";
export const id="dl_7e969d8edd3642609be6";
export const url=new URL("../icons/backspace-duotone.svg?v=4c0574e0604be12acd2c9da82e9d16af60527be4577d4b076a19409b7aac2c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
