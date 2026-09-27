export const name="download-simple-thin";
export const id="dl_e7ad5349f68f4caba6b8";
export const url=new URL("../icons/download-simple-thin.svg?v=e116ea5fe82dd0d2560e1f65bc7f2df3f02972f5a2458af6d77d7d16a17d949f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
