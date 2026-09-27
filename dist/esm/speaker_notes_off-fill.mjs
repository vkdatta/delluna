export const name="speaker_notes_off-fill";
export const id="dl_976fa28895ddb5a7cc07";
export const url=new URL("../icons/speaker_notes_off-fill.svg?v=63550a3681292c670f9d3a28a24d9179a3f26d9741353ea11a36bf013398abd0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
