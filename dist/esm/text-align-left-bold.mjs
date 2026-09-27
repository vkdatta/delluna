export const name="text-align-left-bold";
export const id="dl_4001593ebd985f4a81f0";
export const url=new URL("../icons/text-align-left-bold.svg?v=dd5c7e3b673f480ac8ec7a75eaa6aa84d38a8c9dc122e3be7a75bc617c21737a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
