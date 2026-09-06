export const name="anchor-simple-thin";
export const id="dl_626dd07ceb9748668493";
export const url=new URL("../icons/anchor-simple-thin.svg?v=6f44c039af4bd8a5c15abc235ca7105d679e6e2402f04d2b73d695b35d30f159",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
