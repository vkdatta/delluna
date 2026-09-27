export const name="cell-signal-full";
export const id="dl_979151ad67704910a488";
export const url=new URL("../icons/cell-signal-full.svg?v=4523b8723ef605c04ff92b2f3934b59d2bb860e64172b92d9437fa63ef5d6f47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
