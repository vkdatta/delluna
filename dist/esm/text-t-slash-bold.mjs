export const name="text-t-slash-bold";
export const id="dl_ebb858d45142cd670add";
export const url=new URL("../icons/text-t-slash-bold.svg?v=56b0e6d4a15ea1ee450daf5d4f8dd889056358ae99f1232441316ca080d89348",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
