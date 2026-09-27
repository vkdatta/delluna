export const name="caret-circle-double-down-duotone";
export const id="dl_7ff24c8c5e3a47c49378";
export const url=new URL("../icons/caret-circle-double-down-duotone.svg?v=3576691d4518cc7261085eb962ed4bd3663ed5fcb7a71c18add2efc3e767a439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
