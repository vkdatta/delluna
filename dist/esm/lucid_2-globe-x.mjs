export const name="lucid_2-globe-x";
export const id="dl_72637c085cc64601b759";
export const url=new URL("../icons/lucid_2-globe-x.svg?v=6bb56fa56782e5b90a6dfe248faccc2c5b0e4ff62daa9bfbaecd42a4ffe635e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
