export const name="tab_search-fill";
export const id="dl_274873cd741901e69cc4";
export const url=new URL("../icons/tab_search-fill.svg?v=7cf796e216ce4b10b4fb76a9e128b0054af0ffb4677154b2e94419d347b8f2f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
