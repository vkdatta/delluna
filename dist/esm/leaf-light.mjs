export const name="leaf-light";
export const id="dl_6253b923dec94695b289";
export const url=new URL("../icons/leaf-light.svg?v=f883e94d0e7639e717df412c04a234f7b55bcd9649b01b29f492e981dea6405b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
