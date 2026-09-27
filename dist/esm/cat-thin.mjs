export const name="cat-thin";
export const id="dl_c20123f428ee4377972c";
export const url=new URL("../icons/cat-thin.svg?v=7458d4ebcf92854975bf879641cc96f4d0e49fc92b208b7346afe4f2666999b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
