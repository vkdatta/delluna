export const name="google-play-logo-duotone";
export const id="dl_cad95887b0a5431f838d";
export const url=new URL("../icons/google-play-logo-duotone.svg?v=c36e7755b56465acd2af278f1bbee8273097895e61e762a56ffa0b6c62e2a40c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
