export const name="lucid_1-arrow-left-right";
export const id="dl_421809b335954aa3a855";
export const url=new URL("../icons/lucid_1-arrow-left-right.svg?v=81ffe814ff307735347750826484eb1f8743e6ca067ab61fb3c439e23d81ba78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
