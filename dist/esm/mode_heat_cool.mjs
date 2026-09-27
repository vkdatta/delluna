export const name="mode_heat_cool";
export const id="dl_0a887f0aec0be1b7f55a";
export const url=new URL("../icons/mode_heat_cool.svg?v=d1d1fd5b6edb90d8c7fc74f35a6652e0ed7e0472df1cb0f4c090d3193c7cebac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
