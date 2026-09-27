export const name="threads-logo-thin";
export const id="dl_d2fb096ab2668125d70c";
export const url=new URL("../icons/threads-logo-thin.svg?v=a92f08eee0c6493032e70dc366fb53166ff60b33827e02b32b73891aae01b092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
