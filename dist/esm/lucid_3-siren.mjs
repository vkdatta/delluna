export const name="lucid_3-siren";
export const id="dl_995af2b50f3b42caad31";
export const url=new URL("../icons/lucid_3-siren.svg?v=fc4ba5b76c633824cc5331569dd0d46bb1196a502d894ab26c56f1d2b959a67b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
