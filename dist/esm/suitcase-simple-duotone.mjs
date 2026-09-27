export const name="suitcase-simple-duotone";
export const id="dl_ab355ea3669ef5cb68d7";
export const url=new URL("../icons/suitcase-simple-duotone.svg?v=a8e7c546bb547fbcdb9ef6140d770387b0be6814a5ed215c46c1f2a9e08842c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
