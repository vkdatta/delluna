export const name="sock-light";
export const id="dl_0bcb473cf4e120c238b4";
export const url=new URL("../icons/sock-light.svg?v=2a4dc08e94be439414473d68e6f6ca46ff24f840289962256450dc30565ecc36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
