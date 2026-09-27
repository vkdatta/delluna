export const name="notes-fill";
export const id="dl_60c6b1a8f32ced5adc54";
export const url=new URL("../icons/notes-fill.svg?v=06cee03c9b69d0fe87ce6cb07981764e6dff2adc461e9c8b5ca245b4c0d8848b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
