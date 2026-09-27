export const name="vault-thin";
export const id="dl_f4142782690eddee3ab0";
export const url=new URL("../icons/vault-thin.svg?v=c9512debe5a86664900e083cba0e7dd45bb87d78c05de2bbb81ad564598f86e1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
