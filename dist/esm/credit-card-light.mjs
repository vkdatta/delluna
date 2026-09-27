export const name="credit-card-light";
export const id="dl_a264882a053f4ae0893c";
export const url=new URL("../icons/credit-card-light.svg?v=6dc3093cba2577e4f9f410189bac7531338faff0de4633335d33d977a43c18a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
