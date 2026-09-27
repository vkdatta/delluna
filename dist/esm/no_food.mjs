export const name="no_food";
export const id="dl_b628210eb8d566e18f0d";
export const url=new URL("../icons/no_food.svg?v=2a25acbdf68cdb342927e64e7c7e4b8a379744f41b2a3854141ff68be504e360",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
