export const name="trolley-suitcase-light";
export const id="dl_18e355a7faca6b3bbaa5";
export const url=new URL("../icons/trolley-suitcase-light.svg?v=baaee0c807195391f3121a9b8ecad3955e280269fb4a2abcb52388b3c0a5012e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
