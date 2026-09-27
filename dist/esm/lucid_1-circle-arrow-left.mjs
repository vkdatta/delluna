export const name="lucid_1-circle-arrow-left";
export const id="dl_00143c3919804586b1a4";
export const url=new URL("../icons/lucid_1-circle-arrow-left.svg?v=5cd00572df5b0d745324716283b8ef638a5413ed222dff97432b20ad6434e082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
