export const name="cannabis";
export const id="dl_3ef5bfd884e27b075b3a";
export const url=new URL("../icons/cannabis.svg?v=e8846584a1c4d344d1f233bb8643e150af1d6881be3e65c94daf6d0dd3914a1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
