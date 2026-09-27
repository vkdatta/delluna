export const name="source_notes-fill";
export const id="dl_a1940c649d2a19850b61";
export const url=new URL("../icons/source_notes-fill.svg?v=5439799f547fa48705377a54a8c1b5dca3931372a251dace0c3a9ce6001dbae5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
