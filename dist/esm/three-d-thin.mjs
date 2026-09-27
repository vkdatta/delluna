export const name="three-d-thin";
export const id="dl_17b9a19fc7685220e2d1";
export const url=new URL("../icons/three-d-thin.svg?v=9320ec5477640de257db1df004a9930678675501eb6f71eda2caacbab558a212",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
