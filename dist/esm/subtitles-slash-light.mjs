export const name="subtitles-slash-light";
export const id="dl_0401831db54a3e7c8b69";
export const url=new URL("../icons/subtitles-slash-light.svg?v=59080ecc007dc4cc36f2471b885c3ec93fe368d7791bf9ff8ef9a552ff1c79a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
