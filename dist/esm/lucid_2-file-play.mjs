export const name="lucid_2-file-play";
export const id="dl_797b7252a1ce40b6944c";
export const url=new URL("../icons/lucid_2-file-play.svg?v=7a31b60280767942907f3baeeee21692b8c9d85e19bfaf0c8989b531667698e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
