export const name="chalet";
export const id="dl_dfd62abd5e914b8492c9";
export const url=new URL("../icons/C/chalet.svg?v=96914fe53b6d0a31c36d2c6584c475a7722024bac1134000e8cfbd34e8d3c1f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
