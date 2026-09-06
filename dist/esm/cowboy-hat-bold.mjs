export const name="cowboy-hat-bold";
export const id="dl_5a18ba2bfa3542d085f4";
export const url=new URL("../icons/cowboy-hat-bold.svg?v=d92c55aa53257dee36cc3c7f671092cc540dbec227412dce05d619a13fac939a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
