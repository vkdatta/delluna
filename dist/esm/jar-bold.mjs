export const name="jar-bold";
export const id="dl_b0d4645afb5f468a9f1b";
export const url=new URL("../icons/jar-bold.svg?v=50a1fdb1e962040c4c8e938d50b4256dc0ec5d484c478d7c654a6b8feb81c996",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
