export const name="person_text";
export const id="dl_1d31252a68fb3a0cbd17";
export const url=new URL("../icons/person_text.svg?v=4b272367724b199568c78e3f208157d9bc6bf8cffab563b900dacfb7f0223db2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
