export const name="set_meal";
export const id="dl_9df450b5f57e88c3800a";
export const url=new URL("../icons/set_meal.svg?v=e96ddc6ec7d846baaa5e2ada7eaa9d2cf5bc17dfbd0bed2409a93df9bf00baf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
