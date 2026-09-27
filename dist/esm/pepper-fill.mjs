export const name="pepper-fill";
export const id="dl_0a633c96d3eb459bb328";
export const url=new URL("../icons/pepper-fill.svg?v=5697cf2065c5b311e53e192520dece5e9086c51c0854b07165fc69bb8b6e3a7b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
