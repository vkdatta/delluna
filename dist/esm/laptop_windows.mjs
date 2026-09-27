export const name="laptop_windows";
export const id="dl_af2e76575e2fc13b1432";
export const url=new URL("../icons/laptop_windows.svg?v=cfc15ec47aefd7c8ddd82c50620e0423b79c8695be469e2b512616c73273004c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
