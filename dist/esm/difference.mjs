export const name="difference";
export const id="dl_f1c927d2dfbc0c425a05";
export const url=new URL("../icons/difference.svg?v=c84399701baedd6874977acde62d6462935466fd3ce2805e3153a058eba45b3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
