export const name="doorbell_3p";
export const id="dl_49445fb1da3ed618e8ae";
export const url=new URL("../icons/doorbell_3p.svg?v=55b62b9270a7f336e450988717ac7884a4b755d73d923e17e369477f9f091c4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
