export const name="files-fill";
export const id="dl_c810c258f6b0408a9923";
export const url=new URL("../icons/files-fill.svg?v=8a64b8917b157fcab2674990d58b198f8c110a2e07910af2b13871131f664eb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
