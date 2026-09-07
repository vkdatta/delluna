export const name="spinner-gap-bold";
export const id="dl_11397e57d5294bd99661";
export const url=new URL("../icons/S/spinner-gap-bold.svg?v=cfba074e153bb86d6feec466217641762b0d6727511fdac5d5eb06bd1b612455",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
