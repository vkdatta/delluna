export const name="gender-neuter-thin";
export const id="dl_daba0c75a5ee49f7abcf";
export const url=new URL("../icons/gender-neuter-thin.svg?v=952801bc514d99fad7c0330558abf341533f54f8485ac76abee8ba008887cd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
