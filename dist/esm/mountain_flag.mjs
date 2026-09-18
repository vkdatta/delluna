export const name="mountain_flag";
export const id="dl_f2c59a44ece84f3d894f";
export const url=new URL("../icons/mountain_flag.svg?v=89b9ef61252f93aa8f469657098bf687379e6a1439f8a9f40c9c5151ce27312c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
