export const name="mist-fill";
export const id="dl_a304777913a8df8fac6d";
export const url=new URL("../icons/mist-fill.svg?v=017d5f5c4ad8aa10cd6c3c072cbff09d16862ec0cd4a66e60425d2853954f98c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
