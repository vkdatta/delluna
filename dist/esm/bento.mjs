export const name="bento";
export const id="dl_ff04edd44aa64e99b024";
export const url=new URL("../icons/B/bento.svg?v=7cca8d13d7a3de9b561e1bde2cd44d62de93d7f65b2808170575b9c6b26a2599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
