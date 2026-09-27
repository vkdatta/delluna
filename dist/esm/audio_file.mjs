export const name="audio_file";
export const id="dl_53f99633f3d16c31fdd9";
export const url=new URL("../icons/audio_file.svg?v=ae10095c078188a42dec75fe5f298fb8c2b8e21af84a0902e368900df0eed552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
