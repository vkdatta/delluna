export const name="beenhere";
export const id="dl_a5737fc3b67547ed9a7f";
export const url=new URL("../icons/B/beenhere.svg?v=e2b3f1e49861098c9a0ebdb8ed9ff2b9335519f94f09c8dc4050c5ab7fbc3eaf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
