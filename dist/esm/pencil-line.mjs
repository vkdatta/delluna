export const name="pencil-line";
export const id="dl_d2e146e7bbc349f09e1e";
export const url=new URL("../icons/pencil-line.svg?v=a397be7c6a6428a897244d55bc9693c0ceaa880056057f9b372768e866bd7c37",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
