export const name="shooting-star-light";
export const id="dl_fd44b049c2649732a9ed";
export const url=new URL("../icons/shooting-star-light.svg?v=350a6ce0b6717c5b670c1ee1916cb315d32adba1a2aecf2f260bee61f159928c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
