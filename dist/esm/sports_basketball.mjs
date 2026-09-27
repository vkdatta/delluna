export const name="sports_basketball";
export const id="dl_b2c9949e2b44fc6aa668";
export const url=new URL("../icons/sports_basketball.svg?v=4e60735747b1ca49538e29eba773cd5b2c50124f03222c75605c060c95f9f6e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
