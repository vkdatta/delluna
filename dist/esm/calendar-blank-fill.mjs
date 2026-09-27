export const name="calendar-blank-fill";
export const id="dl_9bca5a161f0f4ec08d21";
export const url=new URL("../icons/calendar-blank-fill.svg?v=43a13d162fb68caa03f669b369e2b11549cc85afd49f8e5cd1f792be79db462b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
