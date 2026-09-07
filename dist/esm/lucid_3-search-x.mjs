export const name="lucid_3-search-x";
export const id="dl_4a51b080be7549fab8a7";
export const url=new URL("../icons/lucid_3-search-x.svg?v=73a9551e94446bb58a4021a3c0ddb18085ccdf291887d2993b791814e7bf6ae1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
