export const name="chef-hat";
export const id="dl_2578dd8c81cb42849934";
export const url=new URL("../icons/chef-hat.svg?v=9aefd371ab2cd0fe449ddd3b7c823d5d7abd641fc77fb1fab8cc9d677a12c54e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
