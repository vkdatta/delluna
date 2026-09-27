export const name="cowboy-hat-thin";
export const id="dl_d93897d5e42c4dfe910b";
export const url=new URL("../icons/cowboy-hat-thin.svg?v=39ce589ab5b69bddc7fff8ded379f251764f2b401aee6c6a1f369d68dbdab749",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
