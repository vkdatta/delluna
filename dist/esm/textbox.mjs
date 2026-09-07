export const name="textbox";
export const id="dl_0fad5bf49dfb49919e02";
export const url=new URL("../icons/T/textbox.svg?v=7074cfee507189150461e46a9f4c754595a813f186928905d8329c05476c7b27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
