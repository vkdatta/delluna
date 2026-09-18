export const name="iframe-fill";
export const id="dl_178b7d0994784308aa9b";
export const url=new URL("../icons/iframe-fill.svg?v=f8d60204835d7e910b70278c875f6d077032ad555347854c42c17f1846b556a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
