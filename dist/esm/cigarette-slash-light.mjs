export const name="cigarette-slash-light";
export const id="dl_7ddc94b9a6024fca93c1";
export const url=new URL("../icons/cigarette-slash-light.svg?v=58b388991f8ebf4fccba2eb3e50a84401455d66c1bb6109af55d92c4db857fb6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
