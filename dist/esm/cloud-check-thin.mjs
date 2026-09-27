export const name="cloud-check-thin";
export const id="dl_9984ce274c8d416b99c8";
export const url=new URL("../icons/cloud-check-thin.svg?v=4b4662a8649ce0af777a73487cead4cbf89f3ccb045ca33e7480bfeb774c5818",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
