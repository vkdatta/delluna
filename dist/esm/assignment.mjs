export const name="assignment";
export const id="dl_6d6a6b3ee6911ac001b8";
export const url=new URL("../icons/assignment.svg?v=cc9eb9af2268921ab851195711a846c8d8759d988175dbca5caf877593070654",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
