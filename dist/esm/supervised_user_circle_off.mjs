export const name="supervised_user_circle_off";
export const id="dl_742704d6ea1f5f0bdb4c";
export const url=new URL("../icons/supervised_user_circle_off.svg?v=8d3e9a69021613aa6bfd2414f765f74bb1fd1b56a7b07e4aad509687dce30939",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
