export const name="android-fill";
export const id="dl_8766f0539a80468bad24";
export const url=new URL("../icons/android-fill.svg?v=9538da433dda14829eb8700cd6fe1e5d08efeee3bd9e11d898df665038c644ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
