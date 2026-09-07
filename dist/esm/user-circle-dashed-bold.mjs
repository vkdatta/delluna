export const name="user-circle-dashed-bold";
export const id="dl_fefc326857cb4991a96d";
export const url=new URL("../icons/U/user-circle-dashed-bold.svg?v=45a13b3eefbc4396284bcaa51d7aad2277cf6cfc4c989e5337a4576af4b99f03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
