export const name="switch_camera";
export const id="dl_3a39dd7d399cfe526f9b";
export const url=new URL("../icons/switch_camera.svg?v=a69868545b8d1ebaa0d6c54a2c06f64834759ea302762bee751efa06e95b062c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
