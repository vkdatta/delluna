export const name="gender-neuter-thin";
export const id="dl_daba0c75a5ee49f7abcf";
export const url=new URL("../icons/gender-neuter-thin.svg?v=0eddf0feacb694c5ca00f5cbdf37a50e1a7b9fdaaab87ff5b8e227bdde1ff1f4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
