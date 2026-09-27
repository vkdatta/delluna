export const name="screencast-bold";
export const id="dl_06b9dfce24116922d2de";
export const url=new URL("../icons/screencast-bold.svg?v=3feaf4b6abd36b309019607cea42e1771aff4a23d7d79832f9ccf8b625de2a64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
