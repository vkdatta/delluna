export const name="exam-thin";
export const id="dl_6d4d59fa204d44b5b27d";
export const url=new URL("../icons/exam-thin.svg?v=dd965d735cda3480d4cafa412a4cb4b02c35a0d16a1473cb865a4246f2fcc272",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
