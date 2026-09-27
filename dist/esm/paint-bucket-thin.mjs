export const name="paint-bucket-thin";
export const id="dl_c638fa05d037437e9422";
export const url=new URL("../icons/paint-bucket-thin.svg?v=0c74649b4d89bb6fce06400ecbcbd736a8d21f8d6fa05807f82455a28d995412",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
