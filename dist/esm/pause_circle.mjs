export const name="pause_circle";
export const id="dl_55576ff6a7fcc53b5e3c";
export const url=new URL("../icons/pause_circle.svg?v=106dfb1b65fbc727b4477f43e5ce2c6f029826821f5d0990328da31a12376a88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
