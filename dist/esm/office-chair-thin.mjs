export const name="office-chair-thin";
export const id="dl_d5ed9c251b6640528bde";
export const url=new URL("../icons/office-chair-thin.svg?v=ede2e08a13fb367a75bd3a61d3f143d2ccfd032122e1e127c70ebf55e2754bac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
