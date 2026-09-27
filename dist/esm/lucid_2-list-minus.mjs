export const name="lucid_2-list-minus";
export const id="dl_06c6806e1353495bbbc5";
export const url=new URL("../icons/lucid_2-list-minus.svg?v=d7fd14d6392b484c6c3aa732c27b50d19ecc20d9fb955fba3039f3564c35a3f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
