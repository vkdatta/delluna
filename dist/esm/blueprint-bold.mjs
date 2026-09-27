export const name="blueprint-bold";
export const id="dl_72d3802c63194da193ce";
export const url=new URL("../icons/blueprint-bold.svg?v=0067fcf9d8e1d36e2be0be89ad6c0d86ac1105744d1659dca6e02d153705ae5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
