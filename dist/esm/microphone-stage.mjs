export const name="microphone-stage";
export const id="dl_6b7998aee0054900a31e";
export const url=new URL("../icons/microphone-stage.svg?v=eb30957f25015e8d0d66de446378f3331d68ca92c80acc33ad9dc68953032c53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
