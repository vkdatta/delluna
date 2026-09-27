export const name="search_check_2-fill";
export const id="dl_c13451e600efe797f05f";
export const url=new URL("../icons/search_check_2-fill.svg?v=13fd65bcecb1eeb45fe9e3c64de62179987e2429b396217b1f06ebdaa3b0dcfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
