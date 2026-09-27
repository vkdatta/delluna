export const name="text_compare-fill";
export const id="dl_4825401a4086e1130b87";
export const url=new URL("../icons/text_compare-fill.svg?v=1ca9209d62453de44a8a9736457f4814035de08a0206604cc278b5b87be2244e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
