export const name="text-h-two-thin";
export const id="dl_3c66ee316779ff81296f";
export const url=new URL("../icons/text-h-two-thin.svg?v=436258ab1e9c447fc43efdc6466ba8b8f01b22aa1efdebc3efa606c91485fe6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
