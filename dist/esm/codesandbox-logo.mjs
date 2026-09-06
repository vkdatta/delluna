export const name="codesandbox-logo";
export const id="dl_f63a3dadc9c64140b6af";
export const url=new URL("../icons/codesandbox-logo.svg?v=3a06928511ee99c38c26cdd3eb303addd560480db4b23940173a6ca75c5cd529",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
