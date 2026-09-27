export const name="google-play-logo-bold";
export const id="dl_f6a31e99e9b246c88e7f";
export const url=new URL("../icons/google-play-logo-bold.svg?v=ca46a965286d37ca79b3367cc6bae23c0f9d3e671d6a0672b805ecffb7c0ce46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
