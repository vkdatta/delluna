export const name="lucid_3-sheet";
export const id="dl_0974f81d2781478d8869";
export const url=new URL("../icons/lucid_3-sheet.svg?v=fd0de605532aa08e9db97c3a4cd2ab68d68fc437d0961c19fd72753d6a66cdcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
