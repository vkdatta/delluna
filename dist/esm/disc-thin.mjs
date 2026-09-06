export const name="disc-thin";
export const id="dl_b082488d458f4f0f993b";
export const url=new URL("../icons/disc-thin.svg?v=74ee448dee166cac254e88304b9d502db280ea0ad4b61c6f79d1de34a09acea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
