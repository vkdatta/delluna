export const name="reddit-logo-fill";
export const id="dl_ee1a188f9cc34e2197e7";
export const url=new URL("../icons/reddit-logo-fill.svg?v=95ec461cb343288c4e03dfa0809d178f3eb580766b967540ff5e5305da83f923",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
