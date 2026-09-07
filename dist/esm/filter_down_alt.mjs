export const name="filter_down_alt";
export const id="dl_436f8a3c83494f61afce";
export const url=new URL("../icons/all_60_named_svgs/filter_down_alt.svg?v=007a7f74cd7e6f443b851f59aec682b9b0ce08fa875c54e0fbdcbd291a719630",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
