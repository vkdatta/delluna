export const name="x-logo-fill";
export const id="dl_0da608b6581141e5add8";
export const url=new URL("../icons/x-logo-fill.svg?v=b612a2094549b3450b5c0826012a58a627c628ecc82c615da95e7143c32ed4a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
