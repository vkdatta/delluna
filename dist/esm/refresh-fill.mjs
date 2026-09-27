export const name="refresh-fill";
export const id="dl_485574ad66eb49bacf40";
export const url=new URL("../icons/refresh-fill.svg?v=871e8928beb3af96ffdffdf6f0ded01a8baf2b9d6b0ffe68321fe4a505f8b1b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
