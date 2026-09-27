export const name="lock-key";
export const id="dl_07f1e3c1cfb6413486fb";
export const url=new URL("../icons/lock-key.svg?v=83db03883757d0f8eecd79d29b479c17eeba429b7db666fb68e833241c3d0e8b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
