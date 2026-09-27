export const name="skull";
export const id="dl_c3fd44a1dfddab5658b6";
export const url=new URL("../icons/skull.svg?v=22862f38f64eb915d1f934d632cd684ed928803ccf73ec7ddc8e03667359a7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
