export const name="mood";
export const id="dl_6c9da4d715f61d44a40b";
export const url=new URL("../icons/mood.svg?v=622f0c47f8ffb7c6ba8c77760eea05cc967c85223545a6496d7cd030e9e5bdf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
