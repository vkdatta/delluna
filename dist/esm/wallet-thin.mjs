export const name="wallet-thin";
export const id="dl_cc50e6d7e7b142399256";
export const url=new URL("../icons/W/wallet-thin.svg?v=6fa4fdab58e077708af5260d78e7c87cf91087e47ac93eb84b04faa1de30bc74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
