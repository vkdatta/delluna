export const name="hurricane-bold";
export const id="dl_be3623ebc3b44bb1ae4a";
export const url=new URL("../icons/hurricane-bold.svg?v=9504e0151a3cdc561da9789d329bd061992c3f745a9204647284daa47309d98f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
