export const name="no_crash-fill";
export const id="dl_4120979aadc26e0b7ac1";
export const url=new URL("../icons/no_crash-fill.svg?v=2a88c7024d380aa2ad200d16efee9d75c206b3b55f11805bef5a16b397b29d5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
