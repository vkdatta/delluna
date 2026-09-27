export const name="arrow-bend-down-left-fill";
export const id="dl_df247eb3d82145fb9506";
export const url=new URL("../icons/arrow-bend-down-left-fill.svg?v=950209be4b095fa3cda3aea8f1929b80ed6ecf886aa7b1fd15de6a447a8093a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
