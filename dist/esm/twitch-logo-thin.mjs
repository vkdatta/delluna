export const name="twitch-logo-thin";
export const id="dl_18e3349808344854b454";
export const url=new URL("../icons/T/twitch-logo-thin.svg?v=2bfdc70a49fcce680a91a7ee8b72f4cc5c83f7ca16e124d8ac9c894a94f7f93c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
