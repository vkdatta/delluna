export const name="edit_location-fill";
export const id="dl_43a5765621cf5340dd3b";
export const url=new URL("../icons/edit_location-fill.svg?v=3a47267e6c655804aa86570a9a2228f9f6e2dfd550bb5d5c0ce786d7e082a100",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
