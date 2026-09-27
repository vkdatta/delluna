export const name="set_meal";
export const id="dl_4f11820bea20e5069e60";
export const url=new URL("../icons/set_meal.svg?v=9da7d86abeecbabf2e8860c6aa74432c85ef701ef91f57200ede884a416fd64a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
