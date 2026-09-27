export const name="apple-logo-thin";
export const id="dl_cf5cf50ad4dd4a2997d1";
export const url=new URL("../icons/apple-logo-thin.svg?v=5a633c4c51ed10f152b99c790ce981323ea36c7b29bc32ecc2db49b4fa415c54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
