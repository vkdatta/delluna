export const name="cat-duotone";
export const id="dl_8f53998a2b33413e916b";
export const url=new URL("../icons/cat-duotone.svg?v=3bc43fc808639c6f6291068daf95abda8013a1f21e3ca0696ba4d74a18609573",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
