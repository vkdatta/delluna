export const name="person_search-fill";
export const id="dl_32fe388f24a14f49b282";
export const url=new URL("../icons/P/person_search-fill.svg?v=eb97ad60d0f13d7f8c5cdd0dc3a7665c14090316ed1caf3c22a9d224f5145879",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
