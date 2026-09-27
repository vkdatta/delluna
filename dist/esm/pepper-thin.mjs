export const name="pepper-thin";
export const id="dl_27c825e86d9e423b811d";
export const url=new URL("../icons/pepper-thin.svg?v=4770ccf8eb0cce4e24d7e74a772f270c2826d91ad1397ec97548021aa2c243c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
