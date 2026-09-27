export const name="caret-circle-down-duotone";
export const id="dl_7a959baaabc644f79d54";
export const url=new URL("../icons/caret-circle-down-duotone.svg?v=4ad39d3c79e223500daf2fdff83ecc0834b73e806ae2c70317a65880548736b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
