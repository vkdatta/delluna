export const name="align_horizontal";
export const id="dl_6335fd841d9cfe05a6ad";
export const url=new URL("../icons/align_horizontal.svg?v=419b3f4a69851f644cb9d69fd03d1cf722ee8e2af0e26001811189b8efa344d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
