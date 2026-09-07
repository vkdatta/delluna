export const name="stack-simple";
export const id="dl_2ec8f7abc6dd43b5afed";
export const url=new URL("../icons/S/stack-simple.svg?v=bb7181b1f1ce2d8e4997205dea05de033a2edf7ceacc70c5a8108256d92348a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
