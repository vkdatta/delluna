export const name="ruler-bold";
export const id="dl_39faf8bd42dc442fb3da";
export const url=new URL("../icons/ruler-bold.svg?v=af0be341c9df709e4e5df249eda88c773dbf6b068145e42d78c0cb31ca66a6ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
