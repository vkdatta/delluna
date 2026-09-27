export const name="cake_add";
export const id="dl_77b0291900e7f4a9bb82";
export const url=new URL("../icons/cake_add.svg?v=96a7f72847d3fe995cb43ec2082d9ceb7991787e193bf8a818e87522a944ad5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
