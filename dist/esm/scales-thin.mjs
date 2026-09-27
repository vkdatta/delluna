export const name="scales-thin";
export const id="dl_13c5d78fc88cae32a477";
export const url=new URL("../icons/scales-thin.svg?v=c7bef4b86bbfb69769138aaa62776a643d79dee99035cee02f9e646d9c19b94e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
