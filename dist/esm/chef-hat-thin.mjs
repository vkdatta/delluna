export const name="chef-hat-thin";
export const id="dl_30d747ee525b4bdbaee2";
export const url=new URL("../icons/chef-hat-thin.svg?v=d7709e9c9d907c27bab5984b51f412143ab3f3aff1cff2249ed5d87d4273f2be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
