export const name="compass-tool-light";
export const id="dl_1fae5c2d59c347b69515";
export const url=new URL("../icons/compass-tool-light.svg?v=4d1f8ce04c5bdc16d1f12f128d1e8641d96742dd3390c956f9c2f70c6a0b30ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
