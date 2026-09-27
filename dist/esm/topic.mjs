export const name="topic";
export const id="dl_e98a3f2851b9028c66be";
export const url=new URL("../icons/topic.svg?v=1fed94a9a94892adb2c16fa53e38c7038e1d2bb5260a9dbf428ffb0af3e0dbe7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
