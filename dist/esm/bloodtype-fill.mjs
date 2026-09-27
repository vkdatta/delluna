export const name="bloodtype-fill";
export const id="dl_c0be5124b00f883fea12";
export const url=new URL("../icons/bloodtype-fill.svg?v=6e2cdef7e64e66b48dc4bf31054874d7ea72aca69a382866a945281194cfe108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
