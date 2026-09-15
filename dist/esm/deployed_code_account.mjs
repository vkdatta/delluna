export const name="deployed_code_account";
export const id="dl_1854a3151f684f2ab939";
export const url=new URL("../icons/D/deployed_code_account.svg?v=1ee20cb952053c5c4dce2ef71852d3a54ff7e0711d54c96bf0372c5e669bf2e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
