export const name="not_started";
export const id="dl_e855188f3c73f4b1e1a8";
export const url=new URL("../icons/not_started.svg?v=216b9319c2fea2fda24ae1f07f0742bf06ee2e171969364d80ae9b0bc7deb20a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
