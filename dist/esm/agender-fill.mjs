export const name="agender-fill";
export const id="dl_c569a530b70b78ba16db";
export const url=new URL("../icons/agender-fill.svg?v=c1f81bf67bf356e48f6d2695b0b3e17354d9fd1a365e9823ced505b95dea08c3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
