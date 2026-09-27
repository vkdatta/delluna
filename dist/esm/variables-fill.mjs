export const name="variables-fill";
export const id="dl_fdd6757b720453411c5b";
export const url=new URL("../icons/variables-fill.svg?v=03e557aa46ca04ba6a9d0e7be0c83c4dd77907e0c7c9307d9995e17587bb27ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
