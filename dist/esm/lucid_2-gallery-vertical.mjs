export const name="lucid_2-gallery-vertical";
export const id="dl_43d93edccbd44bbe9915";
export const url=new URL("../icons/lucid_2-gallery-vertical.svg?v=ffeca28956937287b6090dabeae04f26dd99cb174068c73fc4b9f1b956f6f330",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
