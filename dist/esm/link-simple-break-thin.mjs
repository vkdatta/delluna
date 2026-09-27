export const name="link-simple-break-thin";
export const id="dl_3842667dbcbd412887ef";
export const url=new URL("../icons/link-simple-break-thin.svg?v=6e9f4ba134d9cf5f0aa3693b3baa195d650a6400069e1a820c22bee18c9c107c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
