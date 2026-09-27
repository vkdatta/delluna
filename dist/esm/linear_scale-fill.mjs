export const name="linear_scale-fill";
export const id="dl_51c0b6921c13cb261f6a";
export const url=new URL("../icons/linear_scale-fill.svg?v=3ac7ab9d78d26dff055fd07e127b03220874d45f2c824e4b141ea8617e39fb1e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
