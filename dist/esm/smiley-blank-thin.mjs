export const name="smiley-blank-thin";
export const id="dl_f8175cb20ba15e28f58b";
export const url=new URL("../icons/smiley-blank-thin.svg?v=91c80c00a2e42587882e020c2a65d64ffcdb3079599889ddee01a6af57ad15bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
