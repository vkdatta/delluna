export const name="forward-fill";
export const id="dl_668f7e4edfd74fceb9f0";
export const url=new URL("../icons/forward-fill.svg?v=d59950f88ccc5e72dc0c568dfa33d3423bbf85c24897538b47a7eec83c401e69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
