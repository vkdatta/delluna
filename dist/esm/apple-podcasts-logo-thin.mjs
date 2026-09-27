export const name="apple-podcasts-logo-thin";
export const id="dl_3e9dd5bbe9d442e9aef1";
export const url=new URL("../icons/apple-podcasts-logo-thin.svg?v=c2409f86518fe4ad42a2155aa6da2a1599ea47e650b946a6c0e0de60f277ee22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
