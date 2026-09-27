export const name="park-fill";
export const id="dl_cbb81df81e684eeba3fa";
export const url=new URL("../icons/park-fill.svg?v=408d2a76c3b4c76e55623f427ad3cf227ee907910ed6368ece240eec728bd237",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
