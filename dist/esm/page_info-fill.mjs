export const name="page_info-fill";
export const id="dl_43afdeaaf03b6e9ef68a";
export const url=new URL("../icons/page_info-fill.svg?v=05ab50bb29e55992f65f798683a55d365b35d355acf700f2a39ee039ac228af5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
