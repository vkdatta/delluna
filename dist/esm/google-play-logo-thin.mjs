export const name="google-play-logo-thin";
export const id="dl_d27182be002c4ed38d5b";
export const url=new URL("../icons/google-play-logo-thin.svg?v=4c77d9699007352cb7cc63855b662c94e377f80a5ec527c395d9663c3e92cf78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
