export const name="create_new_folder-fill";
export const id="dl_7d4484fc9d1381cda7d6";
export const url=new URL("../icons/create_new_folder-fill.svg?v=cb57067310723708bcb3accbc8de1daf5b3ef6ffc02023ee85bf49b68c8e23f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
