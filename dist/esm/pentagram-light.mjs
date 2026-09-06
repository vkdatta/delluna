export const name="pentagram-light";
export const id="dl_5f84ed05208a41d498ae";
export const url=new URL("../icons/pentagram-light.svg?v=66a53aa19c98f4faccdded7f9ad859e6e0dcd4463567facb40c959214a60cf14",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
