export const name="device-tablet-camera-thin";
export const id="dl_9f60e352a67543879e6d";
export const url=new URL("../icons/device-tablet-camera-thin.svg?v=f26ff535eebea26732462a6025ed980356f4c2c334732e16e29782ec990b8808",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
