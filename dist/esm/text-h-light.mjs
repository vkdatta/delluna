export const name="text-h-light";
export const id="dl_ef5a8eb0e4747fb9938c";
export const url=new URL("../icons/text-h-light.svg?v=044eee9d32bfb9149b6f80ddcfd80ea07b71a96284fc0ba506987fcf89928bb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
