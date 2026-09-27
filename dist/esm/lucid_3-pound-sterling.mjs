export const name="lucid_3-pound-sterling";
export const id="dl_bf86bd18377d4b84885e";
export const url=new URL("../icons/lucid_3-pound-sterling.svg?v=d647bc6279c7eb13dc33e49df71b2587ab34f5233efa104004704d8bd6569d4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
