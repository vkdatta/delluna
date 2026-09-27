export const name="lucid_1-clock-arrow-right";
export const id="dl_0de566338084456581ac";
export const url=new URL("../icons/lucid_1-clock-arrow-right.svg?v=4776e7baa14b77f23ac63e4f169ba480ab3ef10a1d2c2156b69f5adf0a6baaf7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
