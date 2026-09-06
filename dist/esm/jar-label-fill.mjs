export const name="jar-label-fill";
export const id="dl_75ef0b3c177540889715";
export const url=new URL("../icons/jar-label-fill.svg?v=ce452952cd990153655182f7053b2619d46020f2c01457c54388979fb36842f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
