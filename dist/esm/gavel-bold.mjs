export const name="gavel-bold";
export const id="dl_3514d71f918d4aac8bda";
export const url=new URL("../icons/gavel-bold.svg?v=8cbc27f4bc546a23ea588813bd64b77b175f3c24399aae4a1d86a1c78f9b3fc7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
