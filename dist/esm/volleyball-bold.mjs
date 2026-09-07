export const name="volleyball-bold";
export const id="dl_74efe770b1ba4b6a83ec";
export const url=new URL("../icons/V/volleyball-bold.svg?v=7a8554861acb955202c90ecfe2d9d3f35e0f7e8cc20bab17a5f3dac5b15eac8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
