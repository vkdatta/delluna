export const name="x-circle-bold";
export const id="dl_66d976bab816036f418f";
export const url=new URL("../icons/x-circle-bold.svg?v=de5ef2db14ce5b432536b8203082ebb94034d1e1ab7af1bde4d52946104c3f48",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
