export const name="virus-bold";
export const id="dl_ac49bdc680255279b5ce";
export const url=new URL("../icons/virus-bold.svg?v=589085bf24978960457ea8abb198ca514f6d0f3767b7b42209571c6ca1ec2644",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
