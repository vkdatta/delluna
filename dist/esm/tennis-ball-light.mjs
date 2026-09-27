export const name="tennis-ball-light";
export const id="dl_5b13c4c1accc4943071f";
export const url=new URL("../icons/tennis-ball-light.svg?v=0d2d84725ed57d7ebebf0df6da70352cb93f94b428586d7b0e64ca101a68cbf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
