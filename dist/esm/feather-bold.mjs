export const name="feather-bold";
export const id="dl_d83ed3e96e67448b920e";
export const url=new URL("../icons/feather-bold.svg?v=2c8f6c5868bf2c835d084f60a342bcd6c1477476a66b9a06980f3a85985abae0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
