export const name="battery-plus-vertical-light";
export const id="dl_df7c010544bc4058834c";
export const url=new URL("../icons/battery-plus-vertical-light.svg?v=e4076b0352f8b6ea28f3ae76a07562ed7bde9d797aa447542104c2330ac36ff0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
