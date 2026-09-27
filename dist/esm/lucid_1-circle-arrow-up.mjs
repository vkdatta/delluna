export const name="lucid_1-circle-arrow-up";
export const id="dl_b7747da2acda4e3fbec8";
export const url=new URL("../icons/lucid_1-circle-arrow-up.svg?v=5e6df5b712384dd92816786434f5cb5c41f0ded4a7897857d24ac3f89b7d1c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
