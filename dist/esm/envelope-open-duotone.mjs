export const name="envelope-open-duotone";
export const id="dl_f3f4b932790d444e8363";
export const url=new URL("../icons/envelope-open-duotone.svg?v=3bdc74936bd97c889b86c33d1e6b198670343bf97c5babf75c3539232d972dfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
