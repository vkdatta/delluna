export const name="envelope-simple-open-thin";
export const id="dl_0b4b317db7e74240a85f";
export const url=new URL("../icons/envelope-simple-open-thin.svg?v=ddae76015677619106a2f44ad8ac8a964408c8618907427b02de32425e436fb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
