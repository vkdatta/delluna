export const name="link-simple-break-thin";
export const id="dl_3842667dbcbd412887ef";
export const url=new URL("../icons/link-simple-break-thin.svg?v=6ac9014ea448d7d9753da158ef1d7dca7df4edf41a0cdf0815ed436fc4bf4f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
