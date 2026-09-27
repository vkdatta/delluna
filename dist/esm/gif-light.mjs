export const name="gif-light";
export const id="dl_435b87d7db334be896e7";
export const url=new URL("../icons/gif-light.svg?v=92c16a07ee20c821b1380be938bc761bc3bfba06b066a327f30a678eaecbb86b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
