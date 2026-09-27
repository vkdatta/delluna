export const name="fingerprint-light";
export const id="dl_a93c39646e9a4f06a16a";
export const url=new URL("../icons/fingerprint-light.svg?v=9c5cde1797e0baf0b89a5f6a74da0b83c3fc58b09b81b5b675bcfb2b827d9ea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
