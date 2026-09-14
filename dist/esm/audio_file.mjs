export const name="audio_file";
export const id="dl_93f99b9a6c6d4e4bb310";
export const url=new URL("../icons/A/audio_file.svg?v=507fc572d6c5d6addaf19460ec0c544965ce232bb386e5d8b4e141f214d82844",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
