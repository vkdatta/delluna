export const name="voicemail_2-fill";
export const id="dl_50ee8632746d484e530b";
export const url=new URL("../icons/voicemail_2-fill.svg?v=54b1bc8df84523032ebf5a2ffc8d86f5fd55908944eee20cd6c326f1b546dedd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
