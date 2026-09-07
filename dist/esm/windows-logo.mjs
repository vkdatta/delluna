export const name="windows-logo";
export const id="dl_4d77faa5ccdb45568fe0";
export const url=new URL("../icons/W/windows-logo.svg?v=7fbc3e77c1f1cc05cc15edb074b5f3360e2d8a30253b8826a290c0b62e10f62f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
