export const name="keep-fill";
export const id="dl_6a6d48c71d0e939ca2fa";
export const url=new URL("../icons/keep-fill.svg?v=7e6c27ec748a611aae8edda967040b803c88a05fa54565fa07e194aaa2d7bab5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
