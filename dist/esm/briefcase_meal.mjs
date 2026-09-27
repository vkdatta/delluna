export const name="briefcase_meal";
export const id="dl_3471812e7b6b471a83df";
export const url=new URL("../icons/briefcase_meal.svg?v=ea5f4ab6fd92f91cc78bd9dc75f4aeb9c0d89a2a9cda52cdff81a56e2681aec0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
