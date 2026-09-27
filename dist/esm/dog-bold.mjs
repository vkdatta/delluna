export const name="dog-bold";
export const id="dl_7ea2289a5a9b4c98b5bd";
export const url=new URL("../icons/dog-bold.svg?v=2290c4d19dc561a51974d309d8753261cac22f1151c9341c31d33bcfa57b0d0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
