export const name="clear_day";
export const id="dl_8390697fb89343cba95e";
export const url=new URL("../icons/clear_day.svg?v=c2aa5f08cd7ceb7cf720ab6d981c7afa0338c8da1aa24a21f246e217116477e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
