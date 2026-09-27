export const name="arming_countdown";
export const id="dl_6a333a1c7251ffdbc588";
export const url=new URL("../icons/arming_countdown.svg?v=46bbe5dfd4e65c2fce55412e5648f0fe8008da76d0d3b739c093cfc071b5daf2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
