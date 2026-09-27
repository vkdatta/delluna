export const name="text-h-five-thin";
export const id="dl_6bfe7e2df56db991ac1a";
export const url=new URL("../icons/text-h-five-thin.svg?v=dbc251ea2f5d70fb22efd7afb7036f7633fad9a4d2b3242fae2357ffc6090369",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
