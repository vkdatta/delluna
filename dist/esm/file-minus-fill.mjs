export const name="file-minus-fill";
export const id="dl_6e31e906f2b448969d33";
export const url=new URL("../icons/file-minus-fill.svg?v=6c73f8442b6bcdd9317155ca10e4ca48c3b8bdf722ed9394c1febd704842a566",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
