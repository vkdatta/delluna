export const name="cast-fill";
export const id="dl_041e0f23b81b09a2bfc5";
export const url=new URL("../icons/cast-fill.svg?v=63510053d1b2896bbbe957d58036b689c920b3645872d7909ea5ef272b67f956",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
