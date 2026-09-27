export const name="image-square";
export const id="dl_9cc8be7288b44903beb4";
export const url=new URL("../icons/image-square.svg?v=f57b71527a39fac12159a91ad2e90a8eb4a5a20db2f874c4e1989ac203ddb445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
