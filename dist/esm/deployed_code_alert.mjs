export const name="deployed_code_alert";
export const id="dl_658cb8c4807e5f003dea";
export const url=new URL("../icons/deployed_code_alert.svg?v=e29adbd72ccba43faf70ba06bcacb6c719b563da8081c6849fb4937aefb64383",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
