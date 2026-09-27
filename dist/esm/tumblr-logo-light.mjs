export const name="tumblr-logo-light";
export const id="dl_a527c0a420aa7ed2bf95";
export const url=new URL("../icons/tumblr-logo-light.svg?v=bb0e921139e3b3ecce0370e7ebf159a091afc9614c82edd61ec3eaf3153cb002",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
