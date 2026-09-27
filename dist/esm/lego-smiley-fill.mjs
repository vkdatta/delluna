export const name="lego-smiley-fill";
export const id="dl_de526e4653a146999487";
export const url=new URL("../icons/lego-smiley-fill.svg?v=a809a5d5ca81db59ee45bd7e9d4c4e23b8b93ba5ed752184a4ffbb14e9134072",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
