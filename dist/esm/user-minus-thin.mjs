export const name="user-minus-thin";
export const id="dl_871bb024aec9440f8a19";
export const url=new URL("../icons/U/user-minus-thin.svg?v=739e65079b0acf39c31373afbb7da7d382d2f7938a6306b0f218b2ce794a9634",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
