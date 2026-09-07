export const name="factory-light";
export const id="dl_8d847f627bd141abac4c";
export const url=new URL("../icons/factory-light.svg?v=f76a7f492ba7b5135cac1af4991bb916034c98339ed10dd39ef74b7caf16098a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
