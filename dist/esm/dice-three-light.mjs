export const name="dice-three-light";
export const id="dl_954cbb96891a4887beb2";
export const url=new URL("../icons/dice-three-light.svg?v=9eeb9d52561ccb40220770d802b9f937e0a17696dcf9d45044c82d1847a9b619",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
