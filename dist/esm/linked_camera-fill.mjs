export const name="linked_camera-fill";
export const id="dl_b5f9cd20178a430cbc30";
export const url=new URL("../icons/linked_camera-fill.svg?v=7de956412e6a39f9e534281575cd86fc5923a749fa644504955c898530a8018a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
