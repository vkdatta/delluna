export const name="lucid_1-bean-off";
export const id="dl_2e1e47c71cbb43c08fa9";
export const url=new URL("../icons/lucid_1-bean-off.svg?v=96cbc9856f588c4df04673ee6dcb38dd72ab2e5902a48902541b624f2bcf1b72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
