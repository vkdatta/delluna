export const name="assistant_navigation";
export const id="dl_f95a744112730678f913";
export const url=new URL("../icons/assistant_navigation.svg?v=f79e4ffddd540e117b47584466c61a1ec9cdee39cab5a50df126d7c018e64ece",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
