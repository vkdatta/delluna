export const name="chef-hat-fill";
export const id="dl_75227c1f037145e49a61";
export const url=new URL("../icons/chef-hat-fill.svg?v=feb752b6eed8020c8b51e647298a4eb4913ad72c8f3fc960e0655954eca3f6eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
