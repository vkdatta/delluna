export const name="lucid_3-robot-vacuum";
export const id="dl_487e5787d3394740b289";
export const url=new URL("../icons/lucid_3-robot-vacuum.svg?v=349198b6a9d9cff400ece8fc9d7fe2db492b4871d8915b9442611b6043ff326a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
