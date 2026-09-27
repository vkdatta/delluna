export const name="assignment_return";
export const id="dl_529a1a6ef030f22159e2";
export const url=new URL("../icons/assignment_return.svg?v=600a850440e841c8b4b0407a2633c039e73eb755b98faaa14445a8393a37d74c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
