export const name="speaker-x-fill";
export const id="dl_eacf6a83a1054c60145d";
export const url=new URL("../icons/speaker-x-fill.svg?v=99897b83b907943b98436272114c07e7e861fae6661a6a247356c47d1dbe1bfc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
