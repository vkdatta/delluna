export const name="cast_connected";
export const id="dl_07fb1e90a5e90533f890";
export const url=new URL("../icons/cast_connected.svg?v=eb42d5bec37dc84bd387b1e857283346055bca6e61d0710ad7e94dc73863923e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
