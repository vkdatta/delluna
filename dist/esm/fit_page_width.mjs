export const name="fit_page_width";
export const id="dl_0ae0849b2ada60dbcb63";
export const url=new URL("../icons/fit_page_width.svg?v=cbea3b8ab0b4acbf15336089fa5b287952ab379f8038bd22ea29bd7077bdae34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
