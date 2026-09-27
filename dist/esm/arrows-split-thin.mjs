export const name="arrows-split-thin";
export const id="dl_c58ccc58b3be4471846c";
export const url=new URL("../icons/arrows-split-thin.svg?v=dc0f990a5881cf06ecc93bcbf0d1809b748bf147bd16308af9c9aedee15bfb6c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
