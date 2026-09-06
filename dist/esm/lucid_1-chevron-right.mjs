export const name="lucid_1-chevron-right";
export const id="dl_9f04f58bc8334bcdb5ac";
export const url=new URL("../icons/lucid_1-chevron-right.svg?v=94d1ea7aae0be3bbebec47fbf6138d4acde4d900b9d64d653ef348860ec792a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
