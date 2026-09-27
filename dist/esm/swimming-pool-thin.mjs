export const name="swimming-pool-thin";
export const id="dl_62b24bf3c25322fc1e3c";
export const url=new URL("../icons/swimming-pool-thin.svg?v=2b9434bf483b6835442c683fdac7047e8bd275370c07ad027eb2a7214770fa84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
