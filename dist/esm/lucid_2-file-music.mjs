export const name="lucid_2-file-music";
export const id="dl_f98d265c85da4c868a53";
export const url=new URL("../icons/lucid_2-file-music.svg?v=34c9bc913ac1428e4ef5fb642a92620281534ad25c13237aae920e4aa66b097a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
