export const name="hearing_aid_disabled_left";
export const id="dl_5353d4c7464523df793c";
export const url=new URL("../icons/hearing_aid_disabled_left.svg?v=cf01ca5ca144ba7ba4a53017e4ac41b0d63bf9ffde0fbc4393b9bc697185cadd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
