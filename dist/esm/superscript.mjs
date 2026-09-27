export const name="superscript";
export const id="dl_601c7e5dd4ce4b6f90bb";
export const url=new URL("../icons/superscript.svg?v=16f835cef23d24ab77672cb131869b8055b567461ac10bbe11e5b7e87ff981b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
