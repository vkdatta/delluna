export const name="lucid_1-beef";
export const id="dl_163f5b41330a4681a94a";
export const url=new URL("../icons/lucid_1-beef.svg?v=36caa25cb9055d24510d4c80361b964c74ec4bf6846d6ba4a0c0137bed326e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
