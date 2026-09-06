export const name="road-horizon-light";
export const id="dl_65a4cc92bf9d48a5a79b";
export const url=new URL("../icons/road-horizon-light.svg?v=abbc35aae84fe58c2e812db3f3c53564664da518fc7b42f4b4a39b61b3b7ecb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
