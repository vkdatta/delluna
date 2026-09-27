export const name="villa";
export const id="dl_447df78ad52cff6ccd35";
export const url=new URL("../icons/villa.svg?v=3debaa62e71d1ce9984048a06943cb61e5998954a4d0c0ef771634f480dd0c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
