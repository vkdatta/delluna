export const name="tower-control";
export const id="dl_eb29323514254b62b183";
export const url=new URL("../icons/tower-control.svg?v=a0c3eebe676443c952b69b021e20e8a3abee82347aa598525d1b35538e167959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
