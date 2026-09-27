export const name="pause-bold";
export const id="dl_de8e2ee28672438f8f91";
export const url=new URL("../icons/pause-bold.svg?v=de0d1dfbb57722e24daeacbede284eca918f6599b950f9b6b9037ce1a8c7ef96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
