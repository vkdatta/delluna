export const name="file-png";
export const id="dl_a7cd59a83f6d4da78775";
export const url=new URL("../icons/file-png.svg?v=f72d44ef12949d594ce41a4a261f167a2e980dddaa38fbe02975c22716b21e49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
