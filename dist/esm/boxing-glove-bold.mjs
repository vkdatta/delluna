export const name="boxing-glove-bold";
export const id="dl_33f059911e5c4d02b821";
export const url=new URL("../icons/boxing-glove-bold.svg?v=3865242d65d08efb1b074f05dfa7160b6868f7cdf94be75f60d1991246b4e193",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
