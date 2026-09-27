export const name="desktop";
export const id="dl_9aee8ae259a84751a669";
export const url=new URL("../icons/desktop.svg?v=c834fb6bc38b44a49e79306f246dc77200f8529fcf26e77fb2497a26994edd9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
