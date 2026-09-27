export const name="align-top-fill";
export const id="dl_4e5e932e00fb42d8a01e";
export const url=new URL("../icons/align-top-fill.svg?v=31ac732d727f8eac9980e9217c121befddfa6562c8a8b0a94c03a76ea89cde38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
