export const name="mic_external_off";
export const id="dl_8ab3bafd26616bd3087f";
export const url=new URL("../icons/mic_external_off.svg?v=b8d730fbf1df06841dba345a2e590c655f04028cd6245fca87c2e42c554af0b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
