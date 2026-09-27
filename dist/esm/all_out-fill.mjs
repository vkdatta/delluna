export const name="all_out-fill";
export const id="dl_4835f404c2ea72dcd58c";
export const url=new URL("../icons/all_out-fill.svg?v=2e1b99a94f013b380019390122960a0e0a9a2c6d6bbbe112319a2098e8e7bf4d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
