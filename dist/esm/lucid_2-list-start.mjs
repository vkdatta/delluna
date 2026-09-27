export const name="lucid_2-list-start";
export const id="dl_cdd141ad8118466a908e";
export const url=new URL("../icons/lucid_2-list-start.svg?v=e378220f4d187985b36d542f9f8c8eb4a3d0dc499fec5f5beab812316073e7f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
