export const name="cell-signal-slash-light";
export const id="dl_42450adf4ab14cc09960";
export const url=new URL("../icons/cell-signal-slash-light.svg?v=208e40d0c810760a34dacd3bafd86de1bf6562645968d3467769d9ce17a41280",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
