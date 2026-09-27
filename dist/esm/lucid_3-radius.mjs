export const name="lucid_3-radius";
export const id="dl_ad55a1a92fab4a2ea7f9";
export const url=new URL("../icons/lucid_3-radius.svg?v=d566557c7de2d487a08a8dd77381a1fd0485b796bf6b729102cd85b28b7a06b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
