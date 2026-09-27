export const name="award_meal";
export const id="dl_19332ffb9987ae151525";
export const url=new URL("../icons/award_meal.svg?v=842f17806397f7408d0904a4418b903c8831112193073861e8c562f21d58c91e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
