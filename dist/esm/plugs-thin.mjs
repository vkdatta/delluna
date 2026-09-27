export const name="plugs-thin";
export const id="dl_fe93f37817054b3f8a02";
export const url=new URL("../icons/plugs-thin.svg?v=3554336028a4fc5ae7e85cbd9749b85d0779c0d24d2b4d161b1e297d2ef0f000",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
