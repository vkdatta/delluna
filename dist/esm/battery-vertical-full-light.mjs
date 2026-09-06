export const name="battery-vertical-full-light";
export const id="dl_19367b01ff2b49d984d0";
export const url=new URL("../icons/battery-vertical-full-light.svg?v=9e73d98125a8f576a35d83ccd6d20d70e687f499a68c1cd6015c875743a081a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
