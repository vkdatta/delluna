export const name="google-photos-logo-bold";
export const id="dl_c7e6502df38340a99ce7";
export const url=new URL("../icons/google-photos-logo-bold.svg?v=f96ed1aa9119a2a1a459d1229998134a73da2f1dadec82fe2139918208d93611",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
