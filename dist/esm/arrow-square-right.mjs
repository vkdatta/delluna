export const name="arrow-square-right";
export const id="dl_eccfbdf845ac4b30a5e1";
export const url=new URL("../icons/arrow-square-right.svg?v=e09f5adad79b5deacc4cd3a3163ad78db5eb57923e525b40f75974a7e8d50ab8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
