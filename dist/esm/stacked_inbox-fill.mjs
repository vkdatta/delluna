export const name="stacked_inbox-fill";
export const id="dl_29968468a0236f1e991b";
export const url=new URL("../icons/stacked_inbox-fill.svg?v=d31f287b05b60f88129376d5b5267e9273d261f795635c22c447d9bffbf88ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
