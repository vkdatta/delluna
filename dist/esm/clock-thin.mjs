export const name="clock-thin";
export const id="dl_975dc8ea7294466a9511";
export const url=new URL("../icons/clock-thin.svg?v=5dcc6b57af5555401bdb5ce2e70f1907a90bb003ea0d4932c8013b686b6d130d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
