export const name="queue-thin";
export const id="dl_27111c6ac6ea41db8d3d";
export const url=new URL("../icons/queue-thin.svg?v=f3d7451a4771bc0fe3270580cb2a5c5a3836290d39f217ebb0f53e1ec77a59f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
