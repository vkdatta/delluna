export const name="notches-thin";
export const id="dl_0656c94e888145eb8684";
export const url=new URL("../icons/notches-thin.svg?v=2b03ebdcef026eb2efe61403afaa156ba558d53f1f336c9deb7ce1239e50f9e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
