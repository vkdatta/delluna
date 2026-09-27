export const name="steering-wheel";
export const id="dl_bb8aeee5d69513c8f736";
export const url=new URL("../icons/steering-wheel.svg?v=442c344509c8c713ade7e044b48eb13cafe349799997e2d56856b7356227c683",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
