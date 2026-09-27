export const name="building";
export const id="dl_386ad8834055448c8710";
export const url=new URL("../icons/building.svg?v=b89fc7d9c6ede5fa44f0e7e447c88fcabfeb486426dda00745adac91ac6b6400",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
