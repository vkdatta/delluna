export const name="villa-fill";
export const id="dl_3308e0be7bbeb71cb378";
export const url=new URL("../icons/villa-fill.svg?v=1ddedccbbc894391134e24ea22c80b06ff4fdd74347c3db5e1d6e2afc9dceb52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
