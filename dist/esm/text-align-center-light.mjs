export const name="text-align-center-light";
export const id="dl_2db72b0f276a8b22fc00";
export const url=new URL("../icons/text-align-center-light.svg?v=ab18814723cf8041c75e728c82ec8ca041fac774fbf906f7a83fe01f07580397",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
