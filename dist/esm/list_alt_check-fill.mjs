export const name="list_alt_check-fill";
export const id="dl_8081e8f4fd0cf151c1dd";
export const url=new URL("../icons/list_alt_check-fill.svg?v=b535a328d2552e03ce98f8314576b0eb4d2107281e59bc7ef520c3a17fe85636",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
