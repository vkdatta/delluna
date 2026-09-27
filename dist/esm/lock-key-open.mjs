export const name="lock-key-open";
export const id="dl_e100f827f4b94eb6971c";
export const url=new URL("../icons/lock-key-open.svg?v=d985e0234e5e04eb2ba6b4b16132d09e9c11297f7c0db79fe13512ab631f20c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
