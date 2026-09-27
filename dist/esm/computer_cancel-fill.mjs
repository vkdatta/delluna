export const name="computer_cancel-fill";
export const id="dl_fd4d0b4f11e59394b784";
export const url=new URL("../icons/computer_cancel-fill.svg?v=83963bd8d92d186fe105f7d6ce584baa506ee3ece95557b5f96ea8f972fcbbdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
