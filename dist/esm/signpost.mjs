export const name="signpost";
export const id="dl_8f63b6765580a7c852ec";
export const url=new URL("../icons/signpost.svg?v=27eb91432d5a93f0ff52774bb08393c334569adf9ea5792721ac4691d6363b4c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
