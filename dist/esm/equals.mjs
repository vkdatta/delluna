export const name="equals";
export const id="dl_9409f92a92fe46b9a146";
export const url=new URL("../icons/equals.svg?v=42562681381a8b239b0a99c50159a4179bec2c80036b67629679059c9eda1c9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
