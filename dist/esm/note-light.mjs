export const name="note-light";
export const id="dl_0d1ba2a34c564cf4a4b3";
export const url=new URL("../icons/note-light.svg?v=91027f93a3af6b563463eb4fceb8ab554be95ca0c48e3aaff6aa74db9e30b042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
