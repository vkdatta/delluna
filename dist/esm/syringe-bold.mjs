export const name="syringe-bold";
export const id="dl_3d4fee6c0824baa97a5d";
export const url=new URL("../icons/syringe-bold.svg?v=897e6c5eac488d58c80515e7cf5dc71c1eb3b3cc8e9621c4c8da4ebe67f4a557",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
