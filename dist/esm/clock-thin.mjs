export const name="clock-thin";
export const id="dl_975dc8ea7294466a9511";
export const url=new URL("../icons/clock-thin.svg?v=93d2e672f6f4c8bf1444fa7d1faf132824ac8017fc2ddbc3434ab7fe81991bab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
