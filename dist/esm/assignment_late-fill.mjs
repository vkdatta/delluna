export const name="assignment_late-fill";
export const id="dl_7dc420dc63635ff9299f";
export const url=new URL("../icons/assignment_late-fill.svg?v=29fbce8d09aa857b11521bfd24082a9cb17d9ea6fd0b3a100486f4fce2b3ff2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
