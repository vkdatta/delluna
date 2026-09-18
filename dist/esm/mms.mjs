export const name="mms";
export const id="dl_af03fc15d3f6473787aa";
export const url=new URL("../icons/mms.svg?v=ba4673342e44697d35172f46d66f4e0ea62d3795fbad6169d3933fb587cf4ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
