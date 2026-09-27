export const name="history_edu";
export const id="dl_ad0dd1ddd1ee0b7d5bbb";
export const url=new URL("../icons/history_edu.svg?v=1d0138ed59d6db23ed356563de33138e339b93f38b0098eeea4c372d6367a587",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
