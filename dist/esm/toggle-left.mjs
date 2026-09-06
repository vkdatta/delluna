export const name="toggle-left";
export const id="dl_05f62451e6ca4f7e8dfe";
export const url=new URL("../icons/toggle-left.svg?v=51a82736a85df38043762ac06ef9aea2da18a29ba6a6d07f4be251040bea311c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
