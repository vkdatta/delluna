export const name="flag-triangle-right";
export const id="dl_d78ba72fc5a84b429566";
export const url=new URL("../icons/flag-triangle-right.svg?v=574f8216ff96072383880a9f6ea3d371a122da327f273cbc8184302aef7f4157",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
