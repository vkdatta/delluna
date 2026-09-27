export const name="lucid_3-sheet";
export const id="dl_0974f81d2781478d8869";
export const url=new URL("../icons/lucid_3-sheet.svg?v=bd4a6cda88777cd785c37886c506e2915bcebebd6ffc5176b158b0944ea0ce81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
