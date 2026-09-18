export const name="mic";
export const id="dl_f22f1d70dfbc47828b0c";
export const url=new URL("../icons/mic.svg?v=d07397a2fd8bf321cb1eff2a58d5b985e81bb7d53209127b7a6ebe552022a346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
