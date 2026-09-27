export const name="percent-light";
export const id="dl_15d2707c9b984f0ea17d";
export const url=new URL("../icons/percent-light.svg?v=3bfc0d28814d4185ab27d0da267d80385b461b76253facafd9586b3832c2b2d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
