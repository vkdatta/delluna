export const name="lucid_2-list-music";
export const id="dl_aec2c3ac5fd64c5bbb3b";
export const url=new URL("../icons/lucid_2-list-music.svg?v=92b172b6f835c6211428242b5fef34c35744d02e42f33caf9644ffc1cc04ba35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
