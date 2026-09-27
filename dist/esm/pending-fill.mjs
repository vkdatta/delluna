export const name="pending-fill";
export const id="dl_9b37e995406829affe9d";
export const url=new URL("../icons/pending-fill.svg?v=a05df2aae0c7ae9f62deea70c3a8b20cfcbf04a9be9893f3bc719344ec8a389b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
