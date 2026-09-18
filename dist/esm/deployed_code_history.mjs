export const name="deployed_code_history";
export const id="dl_b3ea812b16414d28affb";
export const url=new URL("../icons/deployed_code_history.svg?v=2cd2b7b47fff678a196a6119a7a348a18c982d8fde8849e972751de071c577dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
