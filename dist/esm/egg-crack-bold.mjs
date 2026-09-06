export const name="egg-crack-bold";
export const id="dl_be8e58e6565e4878b96a";
export const url=new URL("../icons/egg-crack-bold.svg?v=d1bffc515633f32b01e00502ac5e5f4ef750c82bb85e230647c91f337bdb8f2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
