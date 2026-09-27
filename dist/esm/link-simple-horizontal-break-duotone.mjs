export const name="link-simple-horizontal-break-duotone";
export const id="dl_36ce79b810664478b486";
export const url=new URL("../icons/link-simple-horizontal-break-duotone.svg?v=e5de9fd8ccd346f5d58dc4f5495554dd09f15bfe05a41c8be6f06612f21ea7d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
