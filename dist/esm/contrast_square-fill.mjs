export const name="contrast_square-fill";
export const id="dl_6015ed67381d4afdbe94";
export const url=new URL("../icons/contrast_square-fill.svg?v=92c99cb179da94960bbff5eca4178a49ef010d885d6fc1e180ca82e34fda82f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
