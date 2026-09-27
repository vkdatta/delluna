export const name="lucid_1-badge-cent";
export const id="dl_5275bdc8ac194e33abd9";
export const url=new URL("../icons/lucid_1-badge-cent.svg?v=59742e4f0a1fd3b871e90bac75b2f0f28df183602ba5eca7b8d167d06e056476",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
