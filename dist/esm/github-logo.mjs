export const name="github-logo";
export const id="dl_898b857751fe4506ba61";
export const url=new URL("../icons/github-logo.svg?v=477da1e8073c4254d78c97a620ecfa78492cdb8d0c5c213d078bc7e01c0b3c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
