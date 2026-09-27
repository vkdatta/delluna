export const name="person-simple-throw-duotone";
export const id="dl_e585108ec6f94aa0a6d4";
export const url=new URL("../icons/person-simple-throw-duotone.svg?v=a3519fb62d815298b7d7e5da0973deedfbcdc8c29703c1efa9a009533d6fa346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
