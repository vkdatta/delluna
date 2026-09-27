export const name="arrow-u-up-left-duotone";
export const id="dl_92f4f03693d5404cadec";
export const url=new URL("../icons/arrow-u-up-left-duotone.svg?v=0c117428d8a0cc26bb7c85b6e4ce19ee6760a5cbe65e063675574bae5638a0ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
