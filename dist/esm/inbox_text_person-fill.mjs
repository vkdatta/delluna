export const name="inbox_text_person-fill";
export const id="dl_c04c7e41d54d4b5c880b";
export const url=new URL("../icons/I/inbox_text_person-fill.svg?v=e00aecff468f9ed087e370ad63c052d3a735e2d515562a029d2651e28624d697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
