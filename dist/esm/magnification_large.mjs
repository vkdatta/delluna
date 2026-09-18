export const name="magnification_large";
export const id="dl_93fa5f9870474ec88100";
export const url=new URL("../icons/M/magnification_large.svg?v=dc68bf7282b66d6ee25ade1254ae5dd2314f2a48b664bf53af3be4081ce264a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
