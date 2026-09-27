export const name="paint-brush-household-thin";
export const id="dl_c9974ef652ee47fe95f7";
export const url=new URL("../icons/paint-brush-household-thin.svg?v=75c5b67f2457a27fa511c6f505349cb77c8fcfd679ceb4d8f041e6080899d731",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
