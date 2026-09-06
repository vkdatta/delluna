export const name="rocket-launch-light";
export const id="dl_530092c6a03449c3ab18";
export const url=new URL("../icons/rocket-launch-light.svg?v=39df227b651e88e01d46edfcda92882176ec69f3ae064f77948c8d826709ba86",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
