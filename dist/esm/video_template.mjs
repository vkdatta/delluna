export const name="video_template";
export const id="dl_e762d58e612b3e81f753";
export const url=new URL("../icons/video_template.svg?v=579a3cc4f7c1faf2c5f4c99b4a16ba2f5664b9a091f031ab7483cf633cdb5e98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
