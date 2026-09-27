export const name="file-magnifying-glass-duotone";
export const id="dl_707962334c6c4cb99869";
export const url=new URL("../icons/file-magnifying-glass-duotone.svg?v=90a8da231ada4057adeb87a09515941afc7f60553da68fb3ae4792aa4165015c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
