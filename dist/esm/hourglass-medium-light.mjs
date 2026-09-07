export const name="hourglass-medium-light";
export const id="dl_f06d4925789b4922a947";
export const url=new URL("../icons/hourglass-medium-light.svg?v=5cd477f41da2f3cf6439448c425b96dce44fe8c73d8ecae9bcd501e1ea886966",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
