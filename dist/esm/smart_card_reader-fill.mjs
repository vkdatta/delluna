export const name="smart_card_reader-fill";
export const id="dl_0ba99e96e93a42d7ab69";
export const url=new URL("../icons/smart_card_reader-fill.svg?v=a320b0121c0a409b80d94f7b6d60f67cafcf4f506735279e91a9fa40169ed0ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
