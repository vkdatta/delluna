export const name="stack_group-fill";
export const id="dl_d18630312a5ce4a6e0de";
export const url=new URL("../icons/stack_group-fill.svg?v=d9641802d9af3c0c337283a3505d05f066b989524554becf2e7fe5603f86c248",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
