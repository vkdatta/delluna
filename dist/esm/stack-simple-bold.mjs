export const name="stack-simple-bold";
export const id="dl_378f7b5985bc4a6f9277";
export const url=new URL("../icons/S/stack-simple-bold.svg?v=2da9173cfca0ca60a793f62e2fb427b11634c9b452085f0d74022bdbbe958104",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
