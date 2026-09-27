export const name="person-simple-circle-bold";
export const id="dl_c3c9b16f5dee4c71b7a0";
export const url=new URL("../icons/person-simple-circle-bold.svg?v=5d6e05d3ac88cc7295de0693a3d9bd11f3e6441632ba2781674c0b6e3e7fb444",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
