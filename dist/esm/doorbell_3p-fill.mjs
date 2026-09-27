export const name="doorbell_3p-fill";
export const id="dl_973a308bcae5fc0e9d84";
export const url=new URL("../icons/doorbell_3p-fill.svg?v=cb7f76111dd80086e5656859dfa29a395b164f8ebe9a2a5b0ad981fed494ee82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
