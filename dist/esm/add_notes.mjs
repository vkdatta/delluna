export const name="add_notes";
export const id="dl_00b1585f73cdb825c77b";
export const url=new URL("../icons/add_notes.svg?v=530d056db6396c1947ba42d4b40b9fe5da0bcf0dec9fe1c6a929419ef48e5334",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
