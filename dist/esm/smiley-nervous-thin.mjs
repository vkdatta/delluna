export const name="smiley-nervous-thin";
export const id="dl_d7d1c919a4c047c7a1d6";
export const url=new URL("../icons/S/smiley-nervous-thin.svg?v=fb826842a8806a911edda979aea78fc5e2a03d251c472c69ca902677fbf1cc3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
