export const name="travel_explore-fill";
export const id="dl_8d44e5a80a46d8879df8";
export const url=new URL("../icons/travel_explore-fill.svg?v=eba11d2f32617b8009e550cc9aeb480dbdaa16b1b6bb5d41377bdc0bd708ace1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
