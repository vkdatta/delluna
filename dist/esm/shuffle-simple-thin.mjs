export const name="shuffle-simple-thin";
export const id="dl_353e0601f003079fa4fd";
export const url=new URL("../icons/shuffle-simple-thin.svg?v=600d425ccd6853f35e08ad8889b897bc9ebc084cbcaa0a3e64bf3859441f12a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
