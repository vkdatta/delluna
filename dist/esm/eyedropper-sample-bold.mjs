export const name="eyedropper-sample-bold";
export const id="dl_daae982cf1144a7fa173";
export const url=new URL("../icons/eyedropper-sample-bold.svg?v=0bded05eeb09cde5b313acee2bd286c1cf4646cd882364155d3b51e128896cfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
