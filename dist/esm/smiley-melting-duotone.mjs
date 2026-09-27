export const name="smiley-melting-duotone";
export const id="dl_4d4d205242f786b53627";
export const url=new URL("../icons/smiley-melting-duotone.svg?v=91f460503491a296e8a32897a6abab3919e76dbae64fb636ec57e7fdd910951f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
