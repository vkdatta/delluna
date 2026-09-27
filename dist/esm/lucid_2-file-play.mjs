export const name="lucid_2-file-play";
export const id="dl_797b7252a1ce40b6944c";
export const url=new URL("../icons/lucid_2-file-play.svg?v=0b638a9a8e5cf697c71c711bcdc7074907ae8e4aa2deb8f4529afd130264ad8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
