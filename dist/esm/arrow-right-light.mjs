export const name="arrow-right-light";
export const id="dl_e34980debca043f6a3b1";
export const url=new URL("../icons/arrow-right-light.svg?v=b07185fabdb0f827df2bbe26cc8f25f45bf3884814a4fefdfe92ec456851de04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
