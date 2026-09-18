export const name="open_jam";
export const id="dl_a12c4675880a4e5db398";
export const url=new URL("../icons/open_jam.svg?v=1dab73c6af145be267a71964e4f8889857856a42849705803be0de343a16a4bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
