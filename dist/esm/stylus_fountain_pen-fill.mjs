export const name="stylus_fountain_pen-fill";
export const id="dl_5e7743d0f9951f3fe7ac";
export const url=new URL("../icons/stylus_fountain_pen-fill.svg?v=e22079e3983dad0ac3be66038addc1de2da0958e8aba5c612fe3786d43052c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
