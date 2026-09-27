export const name="reviews";
export const id="dl_b2030e638b1e03b023af";
export const url=new URL("../icons/reviews.svg?v=291c9424bd2005e167daa56160aaf87549ff628562faa6a930d5d76d1a3fa389",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
