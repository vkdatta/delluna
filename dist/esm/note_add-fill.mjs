export const name="note_add-fill";
export const id="dl_1df4cc815606eec148d5";
export const url=new URL("../icons/note_add-fill.svg?v=473b4ef13086fb616ee95d2ff2b61cf01ab9490ded730aa688cf63a29ebb04a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
