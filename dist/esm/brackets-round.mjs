export const name="brackets-round";
export const id="dl_2c2e2dd0698f4be6b9f4";
export const url=new URL("../icons/brackets-round.svg?v=a28024e9d6b60a2ce9924453f0fb55390226f4995b64382ee182370bb2d502b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
