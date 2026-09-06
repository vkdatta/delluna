export const name="hand-palm-thin";
export const id="dl_adba8af2ca2942078c02";
export const url=new URL("../icons/hand-palm-thin.svg?v=4e290249bc858b33152a9a92e09ef29bc8523c8ac3b248aed125c9e581abeb7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
