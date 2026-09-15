export const name="browse_gallery";
export const id="dl_9648a6d3bd2d4a38ac35";
export const url=new URL("../icons/B/browse_gallery.svg?v=fc1dbc0d66ec0be9d2c207cf79245b21fdb0abac9985ba5ab03b503eb6d40049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
