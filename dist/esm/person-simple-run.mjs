export const name="person-simple-run";
export const id="dl_607ba61c4e81462f9802";
export const url=new URL("../icons/person-simple-run.svg?v=d76c07e6727db0dbcf3eb83a6b9a360940096ca8fcf396f11469c7053dac2bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
