export const name="number-square-five";
export const id="dl_761a1f23a185434b8a35";
export const url=new URL("../icons/number-square-five.svg?v=56188d58504cb93b8ea899ee98a7a5d09f80ba97e84d208aa29b2b165db26078",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
