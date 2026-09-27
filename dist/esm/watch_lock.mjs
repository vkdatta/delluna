export const name="watch_lock";
export const id="dl_8cd51b63c0ef564bf01f";
export const url=new URL("../icons/watch_lock.svg?v=e6e6bbc4b58a2a3c92e404d79c0179d6814558324f845370ae97b682dc6f88f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
