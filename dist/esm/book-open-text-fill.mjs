export const name="book-open-text-fill";
export const id="dl_e990f4cb82fc416285b6";
export const url=new URL("../icons/book-open-text-fill.svg?v=20292921edbf5fb50f4f60c8d16d40f7c6a99275ed6eed363e564126310e80fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
