export const name="text-wrap";
export const id="dl_2e3ffbe8126742b68aa3";
export const url=new URL("../icons/text-wrap.svg?v=3ff61614e8219d7d5fdd7738dd01dcc8a10e1d4550773c0c08962a888e6381e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
