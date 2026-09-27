export const name="align-bottom-light";
export const id="dl_cdca4a33522041d486cf";
export const url=new URL("../icons/align-bottom-light.svg?v=422a80b1769d6b6f07aa652700ac5932f93474911cbaceef374da763dbf79bd4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
