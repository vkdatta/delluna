export const name="hand-arrow-up-duotone";
export const id="dl_e863a66e1139427a9600";
export const url=new URL("../icons/hand-arrow-up-duotone.svg?v=204cfbd30e61cdb8a9b99ab9916d3af9192ae6933132ddcd4faf47c97af80c76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
