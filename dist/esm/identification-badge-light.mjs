export const name="identification-badge-light";
export const id="dl_3a59d114a1b3457e9c73";
export const url=new URL("../icons/identification-badge-light.svg?v=c44f919facc64a1525d17f322911183dd872a70abedaa089aa5fe722ac6b0cdd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
