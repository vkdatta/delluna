export const name="tip-jar-duotone";
export const id="dl_46dfcdc43734446ba0f7";
export const url=new URL("../icons/T/tip-jar-duotone.svg?v=c53d38da7d9e66d180c7761c6a0e076d804ecf9c7d4659ae9155a97928f09b62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
