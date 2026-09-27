export const name="buildings-thin";
export const id="dl_0189584b5d2d4efabf13";
export const url=new URL("../icons/buildings-thin.svg?v=7efcad269c72e78c801db48b9a3fe23d6452ed87e340943fc484424fa5fb87d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
