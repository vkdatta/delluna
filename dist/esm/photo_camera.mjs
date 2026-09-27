export const name="photo_camera";
export const id="dl_9632d88153d09934855e";
export const url=new URL("../icons/photo_camera.svg?v=3e1508c2c99a6c55987ab1411d6534fa12995752a7ab1d360efb6c543e8882f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
