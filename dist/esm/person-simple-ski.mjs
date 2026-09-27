export const name="person-simple-ski";
export const id="dl_da1cd0c246924bf08f30";
export const url=new URL("../icons/person-simple-ski.svg?v=184245c05912787545765207b0af60ca657a042526c213b631affcdeec557c4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
