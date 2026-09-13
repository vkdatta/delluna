export const name="22mp-fill";
export const id="dl_7c7acc0756ed47eb96a3";
export const url=new URL("../icons/2/22mp-fill.svg?v=1994ad64370f0dbabaac2c53e3ece3841553dd9fc48c85dd4bef363d35f4a133",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
