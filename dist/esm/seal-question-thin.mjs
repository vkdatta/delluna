export const name="seal-question-thin";
export const id="dl_78eedabdafd6a7f6191c";
export const url=new URL("../icons/seal-question-thin.svg?v=b531ccf265ba85e69c07402d670aa41f88f7d476c450edda36e151664df23485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
