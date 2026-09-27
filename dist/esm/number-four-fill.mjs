export const name="number-four-fill";
export const id="dl_4d559be18edb42878bd7";
export const url=new URL("../icons/number-four-fill.svg?v=603e001a1ff7dc4975d03a2be700946f469925831f0739e34afe878e59d94d7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
