export const name="bathtub";
export const id="dl_e8c8f13bb6434658b9b9";
export const url=new URL("../icons/bathtub.svg?v=975fa64887e80c5ca85e2a127e63ec6560c69297d628adf3bfc0d9ce3628065a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
