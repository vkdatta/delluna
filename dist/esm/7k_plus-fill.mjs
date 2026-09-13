export const name="7k_plus-fill";
export const id="dl_968adeb09f1a487aa124";
export const url=new URL("../icons/7/7k_plus-fill.svg?v=ad23ba691bbc87467d5d46bb595d65b7ac8445273fabb6de0a76e746bb956085",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
