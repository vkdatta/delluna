export const name="arrow-u-left-down-duotone";
export const id="dl_823a0f3ac8e34e78bdcd";
export const url=new URL("../icons/arrow-u-left-down-duotone.svg?v=d84e8dac840c41ebcdd30bcc09ddfb004836ae068f341458d5500b3b9ffda05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
