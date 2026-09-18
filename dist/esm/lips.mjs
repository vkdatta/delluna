export const name="lips";
export const id="dl_10976e2545854794843d";
export const url=new URL("../icons/lips.svg?v=93421d6725ae24579f233f478f345e9c1c95bf8f209e7e7c833630a475b4fd30",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
