export const name="lucid_1-book";
export const id="dl_81689f43038645169638";
export const url=new URL("../icons/lucid_1-book.svg?v=924696992798e62438e198438a88198520b059bda8a14a10cb600f869ff9dc55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
