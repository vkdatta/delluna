export const name="scales-fill";
export const id="dl_46dd753adbb2705f72c7";
export const url=new URL("../icons/scales-fill.svg?v=f637f741a1ecf9aad9891cf8ea9f4166e0bdffa5b7ef09a251116a3b4163835b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
