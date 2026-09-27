export const name="person_pin_circle-fill";
export const id="dl_97bdebd9d453671cbaa9";
export const url=new URL("../icons/person_pin_circle-fill.svg?v=635e2d1505b67141fc319d76bb53bdecd5339391d797d9fe8d66581fe8c28483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
