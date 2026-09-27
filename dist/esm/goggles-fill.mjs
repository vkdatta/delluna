export const name="goggles-fill";
export const id="dl_5dce8a3e1d4a4ae6b486";
export const url=new URL("../icons/goggles-fill.svg?v=a79cc07f7adf79d7558b84d6f4f1d78661a9af094610acab0de5fd8ef097d6fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
