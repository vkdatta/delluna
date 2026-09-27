export const name="widget_medium-fill";
export const id="dl_3149feab88403ee09ee4";
export const url=new URL("../icons/widget_medium-fill.svg?v=fb98f3db03409ecadeb640dc61b5a44597380d174ec1d31cd2eadc8cc50a8973",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
