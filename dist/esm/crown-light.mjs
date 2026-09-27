export const name="crown-light";
export const id="dl_2fe6f0804c8541539b2e";
export const url=new URL("../icons/crown-light.svg?v=188b5bfc837dfe1237dfebba0b6ce2a5a17219c4df5dee80447880df7fe37600",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
