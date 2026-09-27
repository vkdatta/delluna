export const name="lock-open-duotone";
export const id="dl_ce473e8948ec4a9cbf94";
export const url=new URL("../icons/lock-open-duotone.svg?v=035a9151b6919041eb758eed8d53f807b3e3709a42bcba01c303cf938ffdaeac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
