export const name="padel";
export const id="dl_113526f28cdd6667d33e";
export const url=new URL("../icons/padel.svg?v=249d224df2dc669cccc80a3802a96087aab69dfa12604f7bd705df102f557c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
