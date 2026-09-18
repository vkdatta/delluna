export const name="tv_with_assistant";
export const id="dl_1b9d31b844fa4136aa8a";
export const url=new URL("../icons/tv_with_assistant.svg?v=e676ec5f028de5fe6e6bcfcb655b8b41e3373677a8ec10c166ce9413d5fa6321",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
