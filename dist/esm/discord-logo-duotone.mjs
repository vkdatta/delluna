export const name="discord-logo-duotone";
export const id="dl_2480c70e17e74210bd5f";
export const url=new URL("../icons/discord-logo-duotone.svg?v=f8c2afe8bea89cc30332cbd76b5bb41454760c3781adc9b667d0a1cb53e63c9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
