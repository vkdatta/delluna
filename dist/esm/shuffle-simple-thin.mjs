export const name="shuffle-simple-thin";
export const id="dl_f2279f0dada1196e0d0c";
export const url=new URL("../icons/shuffle-simple-thin.svg?v=c0f39b711d4c15969380d34950a17cd1e6cde097b0640769f1fd4807ffbcb590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
