export const name="lucid_1-circle";
export const id="dl_7f96e070089741039015";
export const url=new URL("../icons/lucid_1-circle.svg?v=8d4932d902c2a59c7ab573d727059cd7da329a25a50a993d6f169d3cb3ef0dff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
