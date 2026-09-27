export const name="lucid_1-camera";
export const id="dl_a345e5a9328d4a9ba124";
export const url=new URL("../icons/lucid_1-camera.svg?v=f0d509c09f5af0113fce06cf8856475a68eb56508341fa3733b48c71470776df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
