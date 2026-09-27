export const name="washing-machine-bold";
export const id="dl_85756a61c7b177c40bdb";
export const url=new URL("../icons/washing-machine-bold.svg?v=bc0d92fe6a062c08738607cedb083e67d606e8e2a5b985b845b7a24c425405ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
