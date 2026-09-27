export const name="stacked_bar_chart-fill";
export const id="dl_ccd8567215671daf33a7";
export const url=new URL("../icons/stacked_bar_chart-fill.svg?v=716b6265cef242195138b63e7b791f40138622a5cf514535e536e72c82216798",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
