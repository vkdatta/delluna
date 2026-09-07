export const name="stamp-thin";
export const id="dl_a79fe74c6da04243a81f";
export const url=new URL("../icons/S/stamp-thin.svg?v=7e293855020e45fdff899a289af672672cd3ca7cbfbb48e96be2093a48f35cc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
