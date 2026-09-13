export const name="360";
export const id="dl_87dce91e60b04603b9ec";
export const url=new URL("../icons/3/360.svg?v=1a3efa773ac404e5452328fe131e360e247c12c2c9e3916429c216e3ebad1fd8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
