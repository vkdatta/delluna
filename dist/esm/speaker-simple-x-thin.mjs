export const name="speaker-simple-x-thin";
export const id="dl_4e027210a2fd24309614";
export const url=new URL("../icons/speaker-simple-x-thin.svg?v=d28f8167399f7ff6d20e9b84649e4971b62a3eaa1b0e888bdcaaeca99684e362",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
