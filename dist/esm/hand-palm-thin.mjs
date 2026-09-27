export const name="hand-palm-thin";
export const id="dl_adba8af2ca2942078c02";
export const url=new URL("../icons/hand-palm-thin.svg?v=a0d6f205716e2656cce6bc1d99ead47c2d02f09516d090dd5395f95c085abd4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
