export const name="circle-dashed-bold";
export const id="dl_2fe1518987e743668c91";
export const url=new URL("../icons/circle-dashed-bold.svg?v=3cca3508d43296de7c70e165f63d262db77aacbb08d5b561d8f20d89f1f3ee27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
