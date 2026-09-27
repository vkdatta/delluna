export const name="cooking-pot-bold";
export const id="dl_6e24ec2ab53b434e8c0d";
export const url=new URL("../icons/cooking-pot-bold.svg?v=31fcee467a0c8814f698ce1626d1c9ec53f8d99b1bd65025b407d68ecf04bce9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
