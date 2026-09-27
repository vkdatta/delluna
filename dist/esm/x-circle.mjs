export const name="x-circle";
export const id="dl_7b0dc5dbbfaf59d5efd3";
export const url=new URL("../icons/x-circle.svg?v=319f7f9d7767765476c7167761cc3ffd4a31e93dcca03452f86898c67dcf7eb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
