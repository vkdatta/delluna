export const name="cat-light";
export const id="dl_97fa51b4d55f4e81ab62";
export const url=new URL("../icons/cat-light.svg?v=00e8f04485437ff153fcb5898e9619f7958ad8199a5167d1e661e88890ba5471",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
