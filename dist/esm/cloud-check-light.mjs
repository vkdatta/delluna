export const name="cloud-check-light";
export const id="dl_8b1ba63125564423af42";
export const url=new URL("../icons/cloud-check-light.svg?v=1116e1431338230167b4fa6593525c123bdea4eb94d2d69d19dc950efd792b0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
