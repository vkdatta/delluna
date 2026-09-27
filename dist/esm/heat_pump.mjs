export const name="heat_pump";
export const id="dl_d8e72195ab25ea42991a";
export const url=new URL("../icons/heat_pump.svg?v=ba0e1119122a9fbfb9caa169ca71249aa05afd9b77c2b4a02f8c959e7968a58e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
