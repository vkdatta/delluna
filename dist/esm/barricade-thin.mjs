export const name="barricade-thin";
export const id="dl_067dfadc7d254a95aaab";
export const url=new URL("../icons/barricade-thin.svg?v=e323095802da97a96b5da23a7fd20b60a7c9ce3f4c89a36ee3d29cb32ac991cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
