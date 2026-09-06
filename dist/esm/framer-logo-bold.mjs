export const name="framer-logo-bold";
export const id="dl_abdf2baea44f40d29ff7";
export const url=new URL("../icons/framer-logo-bold.svg?v=868db2aaabd03043537265428377470bdeaeb0684f6b99c69cabd280a5bc72d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
