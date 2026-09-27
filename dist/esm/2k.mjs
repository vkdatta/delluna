export const name="2k";
export const id="dl_fbdae513fbb932615e54";
export const url=new URL("../icons/2k.svg?v=774cf277151a7ef7054d83e370d126ae03e4ce24650582bfa0e92853dcba3c14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
