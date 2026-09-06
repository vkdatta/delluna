export const name="lucid_1-briefcase-conveyor-belt";
export const id="dl_afd43382d1504bd1b39f";
export const url=new URL("../icons/lucid_1-briefcase-conveyor-belt.svg?v=5a8fb067d52c1ffe087c8c8f26e1e88b03f0a38ad94c68718a37e875d0bfb6d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
