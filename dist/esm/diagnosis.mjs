export const name="diagnosis";
export const id="dl_a753f20e570360580fae";
export const url=new URL("../icons/diagnosis.svg?v=eadba6deb12e123348c7de6da8c9c73e88f7027f0920c2572c9f42869c213daf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
