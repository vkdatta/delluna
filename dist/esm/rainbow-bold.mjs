export const name="rainbow-bold";
export const id="dl_2dc8ea47f84a44c7ac8f";
export const url=new URL("../icons/rainbow-bold.svg?v=44e04177488c181913da8cfc1fd401191263f9d914a130524771948a1caec40d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
