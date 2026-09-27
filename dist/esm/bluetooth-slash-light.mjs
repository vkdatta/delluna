export const name="bluetooth-slash-light";
export const id="dl_c26418ef15cb46c9b0d5";
export const url=new URL("../icons/bluetooth-slash-light.svg?v=3b4206ccae1423a7d352937ffa834c75eaf87305dcc3addee43d66974fdcd042",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
