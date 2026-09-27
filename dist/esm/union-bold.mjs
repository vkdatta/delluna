export const name="union-bold";
export const id="dl_4fbc525aaf9ac5d40c23";
export const url=new URL("../icons/union-bold.svg?v=6c1a811c22c22db56d1a1dae31fb8ef40fd112c274e739c629a303760bdd2cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
