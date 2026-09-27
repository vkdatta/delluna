export const name="dishwasher_gen-fill";
export const id="dl_6d8eec5d5800ad522908";
export const url=new URL("../icons/dishwasher_gen-fill.svg?v=f1fd1629e746a54ebf10ccbe0e5cd1241f63ae516a14cf6fdb54c4e6c8be8252",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
