export const name="domain_verification";
export const id="dl_f9f3a20b4c8ff9404a47";
export const url=new URL("../icons/domain_verification.svg?v=949c6f52a08c6de4a3b565c354190f615f363c9fddcdc0c75a3b2e047f92ab22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
