export const name="stylus_brush";
export const id="dl_2b3f2b9b2ffc8743af3e";
export const url=new URL("../icons/stylus_brush.svg?v=6a9dc5bf27200fa434dc00c60c8c89864a12c9daa4ff23cd85529f7cd9582f07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
