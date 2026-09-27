export const name="fmd_bad";
export const id="dl_4ed6b2ee43da45a64c42";
export const url=new URL("../icons/fmd_bad.svg?v=b73555b245457eb65343b5d8f97c1128f24c213d564b8a014f5a2f339c1c53a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
