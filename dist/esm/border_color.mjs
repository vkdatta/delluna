export const name="border_color";
export const id="dl_353b72c24ef97108a1f3";
export const url=new URL("../icons/border_color.svg?v=822118a2ac67f14491bf29e615ca174f8dd15a188fad306b169517f05488454c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
