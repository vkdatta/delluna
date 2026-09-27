export const name="checks";
export const id="dl_4e54a25ed3534ad79161";
export const url=new URL("../icons/checks.svg?v=e6cf1beba27a80c72169b0d8cc21b9411528da8eb805e0b5a70328d28ffe6e72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
