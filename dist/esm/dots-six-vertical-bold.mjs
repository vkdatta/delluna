export const name="dots-six-vertical-bold";
export const id="dl_4de3ec8559fd4215a23e";
export const url=new URL("../icons/dots-six-vertical-bold.svg?v=df6d7bfe6fd56ca6b04672fe8374737b22099e9ba69716e545acbd2485fcd57a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
