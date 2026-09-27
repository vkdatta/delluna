export const name="insert_text-fill";
export const id="dl_77985e3de9ba6f747b57";
export const url=new URL("../icons/insert_text-fill.svg?v=06bdc5c3ab817b14ccf98f018c3ba90baf10cb93a4bf855fdce9ae58c5fabe2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
