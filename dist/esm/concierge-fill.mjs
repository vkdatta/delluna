export const name="concierge-fill";
export const id="dl_5cb759abf0773983bc70";
export const url=new URL("../icons/concierge-fill.svg?v=d27727f7da39663ca65fdf63d784f00689f97ea2664b135fd7fb60b3286acbbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
