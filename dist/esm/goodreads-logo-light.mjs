export const name="goodreads-logo-light";
export const id="dl_7e42aa704abd49fab1ee";
export const url=new URL("../icons/goodreads-logo-light.svg?v=75a1cc3f657137ad917dfb6bb3d631eca23716187d41674d4dbebe2ba19381db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
