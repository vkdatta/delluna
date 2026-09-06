export const name="hoodie-thin";
export const id="dl_929785fe5339422e94d3";
export const url=new URL("../icons/hoodie-thin.svg?v=dbe94f3dbacace9b2b443cc4dcd241c16bd5c3fe0dbebd45473c1e5c1f8eedb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
