export const name="gable";
export const id="dl_5f566d735406445ab348";
export const url=new URL("../icons/gable.svg?v=8c2705d390f13b641c21b8918e3494e453e848799ca0310d4b2d9efa766a5c77",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
