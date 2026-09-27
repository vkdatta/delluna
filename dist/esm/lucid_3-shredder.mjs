export const name="lucid_3-shredder";
export const id="dl_7ebcdd2524f841488101";
export const url=new URL("../icons/lucid_3-shredder.svg?v=c17b277114a9477f885b50f0d485923a486ef9c517995c4c1a0c460ae38cc3cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
