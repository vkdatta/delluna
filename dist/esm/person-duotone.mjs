export const name="person-duotone";
export const id="dl_ef81aea75e8243ba9b0a";
export const url=new URL("../icons/person-duotone.svg?v=3ca30ec2f1fce6053f99cc38e13fc525f6d894d4d8bd8d303aa8e99693bd902f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
