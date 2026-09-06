export const name="envelope-simple-light";
export const id="dl_4cd7ec9e9eab440d8097";
export const url=new URL("../icons/envelope-simple-light.svg?v=ed6978cafae9401f245df07dcfe93d62c8f4a9ae5bbe5f47baddddd82cc0b8f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
