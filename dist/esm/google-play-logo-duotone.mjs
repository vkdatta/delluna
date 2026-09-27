export const name="google-play-logo-duotone";
export const id="dl_cad95887b0a5431f838d";
export const url=new URL("../icons/google-play-logo-duotone.svg?v=094f7ac5fc4d9bd4ef13588e53c98e9816a30d72bc21271d357d82e919f0eeb7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
