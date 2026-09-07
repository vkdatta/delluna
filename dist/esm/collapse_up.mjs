export const name="collapse_up";
export const id="dl_4fdcc7afb5284a3183a1";
export const url=new URL("../icons/all_60_named_svgs/collapse_up.svg?v=c78ecbced28a63ee1968742301dd807574354bf082dcb8699b7ed9f060454013",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
