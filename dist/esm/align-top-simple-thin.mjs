export const name="align-top-simple-thin";
export const id="dl_675fe8d7c84f4ab4a028";
export const url=new URL("../icons/align-top-simple-thin.svg?v=dd15972da52b3cf24a1973c20a0416e7e83588ecfd0215e38e332435d60df4d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
