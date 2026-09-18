export const name="navigation";
export const id="dl_1cbead7b27454cffa546";
export const url=new URL("../icons/N/navigation.svg?v=725d090636a4bf8df7337897209a370c417845825dd72437d24ea611708f4399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
