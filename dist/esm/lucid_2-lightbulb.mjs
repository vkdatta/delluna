export const name="lucid_2-lightbulb";
export const id="dl_7e4352b67eae48fb8ad5";
export const url=new URL("../icons/lucid_2-lightbulb.svg?v=411bdd4951035ce9c82c0997c3b5edda53ab02c8fcad9043ac982fdb4a1e9426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
