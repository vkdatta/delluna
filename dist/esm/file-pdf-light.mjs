export const name="file-pdf-light";
export const id="dl_a09ff3d6dc9f4dd0acd9";
export const url=new URL("../icons/file-pdf-light.svg?v=2f20312e111263eacf1a88c6149b26024778e430e89b7495d3bb5c713d053a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
