export const name="join";
export const id="dl_af9b7dfea8df44919056";
export const url=new URL("../icons/J/join.svg?v=c7d566ca4ae81b7b274356630c522a5021d5cb8666e1f1f478d948d14da11d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
