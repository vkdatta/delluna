export const name="sensors";
export const id="dl_a793cb674e6c77720749";
export const url=new URL("../icons/sensors.svg?v=3f18690644ca7d0709d002edb1a28fd6eba474311896162eeaf7700a0b9ab71c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
