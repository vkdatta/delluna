export const name="inbox_text-fill";
export const id="dl_21838ebda42bb9755dcb";
export const url=new URL("../icons/inbox_text-fill.svg?v=6f69c90f5a340aaa565727fa4652e76cea821eac2bf3860bd066db18e382781f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
