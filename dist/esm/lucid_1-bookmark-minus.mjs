export const name="lucid_1-bookmark-minus";
export const id="dl_5be028686ed84f8b87c0";
export const url=new URL("../icons/lucid_1-bookmark-minus.svg?v=0f2a350f6fe49d3d066feb58891fc9d1aea57b1e8a3df31051dc13183207414c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
