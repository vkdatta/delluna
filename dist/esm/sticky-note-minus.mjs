export const name="sticky-note-minus";
export const id="dl_67318d6f555149238915";
export const url=new URL("../icons/sticky-note-minus.svg?v=849dbeff0f1889c9a1c85fbd286e9c0a668f6346b3980d92bbcfc854e907bff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
