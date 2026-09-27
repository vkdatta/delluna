export const name="device-tablet-camera";
export const id="dl_57ea7fc3c99f4690a927";
export const url=new URL("../icons/device-tablet-camera.svg?v=bb105799a4a9c60647b44ee5b241fd43c5984c25d1b6f65e020dfefe29fda0df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
