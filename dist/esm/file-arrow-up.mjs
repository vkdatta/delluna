export const name="file-arrow-up";
export const id="dl_34d8291e9ff348d9951b";
export const url=new URL("../icons/file-arrow-up.svg?v=b7127fb44729f481bb574b3e3ddfff1085de38bfe82d112c743f887ba7352da2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
