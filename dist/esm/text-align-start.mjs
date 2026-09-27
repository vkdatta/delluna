export const name="text-align-start";
export const id="dl_5d08e4f03cac41878e93";
export const url=new URL("../icons/text-align-start.svg?v=3d984e1afc64b40b9db8ab87c0c31d4db6a29d044c048c72e7e771298394b79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
