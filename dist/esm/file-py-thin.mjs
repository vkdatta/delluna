export const name="file-py-thin";
export const id="dl_97245c0971914bec8406";
export const url=new URL("../icons/file-py-thin.svg?v=021d20ca905b656ed75df4da802f41bbea794d6691dfc8671416cf8fa796261b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
