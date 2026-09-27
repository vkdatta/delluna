export const name="bug-beetle-thin";
export const id="dl_34f47cf858f143868c9c";
export const url=new URL("../icons/bug-beetle-thin.svg?v=e7c057daf4e1eba07a3b0d18fedc7bd71966762ff4d1b855c569ec9dd66ac4d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
