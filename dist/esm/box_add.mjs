export const name="box_add";
export const id="dl_67c857ede418419e86f5";
export const url=new URL("../icons/B/box_add.svg?v=9afb29ab31c88b1cd591c44e1953c861c6606d0b89e19196b08ea5feb547425b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
