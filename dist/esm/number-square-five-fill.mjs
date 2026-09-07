export const name="number-square-five-fill";
export const id="dl_14f37b372949488b90bc";
export const url=new URL("../icons/number-square-five-fill.svg?v=237aa09654edb69737174d98239eacd91fac662863a11ee091fcec2e16b40923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
