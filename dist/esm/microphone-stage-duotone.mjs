export const name="microphone-stage-duotone";
export const id="dl_fb0ac9e431ab44d39bd2";
export const url=new URL("../icons/microphone-stage-duotone.svg?v=39b8c9cde12de0dbf0292db306f4edb5f684951ae66c732cc3007e2f93220206",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
