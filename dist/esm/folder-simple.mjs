export const name="folder-simple";
export const id="dl_a1ff8273c3eb493f9b42";
export const url=new URL("../icons/folder-simple.svg?v=9e167c28ff2013a4e8e871b13d1191dc912ca8c0ba3648970a5c5a01b9d5b1c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
