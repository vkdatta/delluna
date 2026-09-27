export const name="hospital";
export const id="dl_5c290ce2e0f54a8daf8c";
export const url=new URL("../icons/hospital.svg?v=9935bf768ecbd15e3b7f578aee22229b06fb14562251c75a9067d11fc738bc38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
