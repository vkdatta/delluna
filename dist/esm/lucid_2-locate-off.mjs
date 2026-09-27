export const name="lucid_2-locate-off";
export const id="dl_d6849015aa6b4a01893f";
export const url=new URL("../icons/lucid_2-locate-off.svg?v=4143d1b415a081cebc3eca48c5f2eebce2e921c92f8063636bb1cb8d7c0e1602",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
