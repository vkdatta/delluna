export const name="lucid_2-file-play";
export const id="dl_797b7252a1ce40b6944c";
export const url=new URL("../icons/lucid_2-file-play.svg?v=ab740d491b68099dd44205365bd1d041decfde4e4dc0a5109a1101712883eb62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
