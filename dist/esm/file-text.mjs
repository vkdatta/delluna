export const name="file-text";
export const id="dl_4035574327304ac2874e";
export const url=new URL("../icons/file-text.svg?v=7fa2d130802603b35ba8ce00aae344c5fafae89e1031b261fa13132a4eb24505",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
