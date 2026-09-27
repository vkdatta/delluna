export const name="lucid_2-file-digit";
export const id="dl_bdc6218ec225400c99c1";
export const url=new URL("../icons/lucid_2-file-digit.svg?v=84d3b893ffb1e89a2051200cc9cbfebbd99d817c3838aecb2fa469e526d83480",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
