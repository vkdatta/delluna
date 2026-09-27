export const name="assignment_ind";
export const id="dl_76c21bc7cb65fa40b1ef";
export const url=new URL("../icons/assignment_ind.svg?v=6674614802aea35bb880ec62a3462aa347230a085dd2776093be74bc890f36fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
