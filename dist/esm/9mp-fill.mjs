export const name="9mp-fill";
export const id="dl_a487f3ffd59b41a6c60d";
export const url=new URL("../icons/9mp-fill.svg?v=afc040d6e16b5902e9e16b63b6d46d5852e929609b546c88c9acc15b9f32f88b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
