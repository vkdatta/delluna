export const name="eject-simple";
export const id="dl_6b4b5a55b9ef45a6907c";
export const url=new URL("../icons/eject-simple.svg?v=a22dea53c25b5bfd5ed1ecf52c02a9aea9bcb69040daf58a95c9bc66df7ae681",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
