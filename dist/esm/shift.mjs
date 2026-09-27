export const name="shift";
export const id="dl_744c123d21f79da58e89";
export const url=new URL("../icons/shift.svg?v=9342d5f402188878fcb6926a8a25786efeb07f31e5922bef0ddbf8551ff197e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
