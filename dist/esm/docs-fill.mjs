export const name="docs-fill";
export const id="dl_415fb0f9274a5dcbe532";
export const url=new URL("../icons/docs-fill.svg?v=24aa95dcc7390c112dc53fe11122d4200b0f715ee773098142997b7c2eab5816",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
