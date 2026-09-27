export const name="table_sign";
export const id="dl_68cdd5625c307c76c6a1";
export const url=new URL("../icons/table_sign.svg?v=b72d4a4b0bfea477ac644a6adef21ce397122795d063884f5c24a37410eec555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
