export const name="10mp";
export const id="dl_fcb4b02e4d91996a32d5";
export const url=new URL("../icons/10mp.svg?v=47979875b99bba821a4cdf35bb22aad6885f8740c1fcd81cc79d202945aa0968",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
