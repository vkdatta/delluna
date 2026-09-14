export const name="assignment_late";
export const id="dl_f916cf544d9a4932b9bc";
export const url=new URL("../icons/A/assignment_late.svg?v=7ffe1e841d42503c04f258037082362e81f2b33f6f6a062af17de9d6ac4aa67e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
