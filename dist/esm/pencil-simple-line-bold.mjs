export const name="pencil-simple-line-bold";
export const id="dl_5d1cb84192a040b2a3d2";
export const url=new URL("../icons/pencil-simple-line-bold.svg?v=f30976199d820006ca4ce7ef260bc568608fb42dde53a60cccee4077d39cbfed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
