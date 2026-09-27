export const name="person-simple-run-light";
export const id="dl_27aee27f5f9f4ecc846c";
export const url=new URL("../icons/person-simple-run-light.svg?v=044767aa7aedfd0abd7c692923826b673be3c9164d269ca9298d83b8349ada6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
