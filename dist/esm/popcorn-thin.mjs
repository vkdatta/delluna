export const name="popcorn-thin";
export const id="dl_e451a215034e4e79a884";
export const url=new URL("../icons/popcorn-thin.svg?v=fd9389c06fc9bfda3ca89d0bd6cca2f7cd67e83f85fab52b2fe9640283c6b05b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
