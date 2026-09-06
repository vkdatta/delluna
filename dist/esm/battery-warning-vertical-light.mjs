export const name="battery-warning-vertical-light";
export const id="dl_4a05a395f39840bcb445";
export const url=new URL("../icons/battery-warning-vertical-light.svg?v=fde0becdcefe9f24ec6280a47a7c957c9526073769c4bacb997276c790b209bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
