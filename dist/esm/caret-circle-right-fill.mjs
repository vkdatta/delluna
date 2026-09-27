export const name="caret-circle-right-fill";
export const id="dl_69c08ee556584433aa7f";
export const url=new URL("../icons/caret-circle-right-fill.svg?v=bf7eeac983a67cbda41a93ac01260c3462f94c01981990aa315e5e02100a1356",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
