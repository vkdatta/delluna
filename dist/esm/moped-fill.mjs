export const name="moped-fill";
export const id="dl_6c44738096e6483590c8";
export const url=new URL("../icons/moped-fill.svg?v=b275575ee286b166e1a86f460d88f108cc3bc5ec4b6846ab6446903d072c3d6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
