export const name="text-strikethrough-light";
export const id="dl_d845564896e14684a1ca";
export const url=new URL("../icons/T/text-strikethrough-light.svg?v=b510afa4bd7c62c347ff13e0b1494673edb2a6f40332371d537664d7807a4adf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
