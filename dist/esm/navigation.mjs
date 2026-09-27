export const name="navigation";
export const id="dl_ada8e5d84739c4f87ad4";
export const url=new URL("../icons/navigation.svg?v=3607ea6a9b980f8dfcaf9bd81866c2da6fef62853d112bb27f913fc7de8082b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
