export const name="subscript";
export const id="dl_4ab46ed235a04c7ea3b1";
export const url=new URL("../icons/subscript.svg?v=cce1718711c993ba68bdfd3bacea8fad068dd3b9c2d98319b569b04049a662b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
