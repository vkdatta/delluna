export const name="19mp";
export const id="dl_669914029f79d6d94626";
export const url=new URL("../icons/19mp.svg?v=33d21a0cae9ef4e5e855015997061947eac48e6a4915da48b734c3a02ca50faa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
