export const name="google-play-logo-light";
export const id="dl_e9ccca373b2d4787b17e";
export const url=new URL("../icons/google-play-logo-light.svg?v=d54df52500d6186d8f14d8e9a7741c4fd802d7fb50cc567f9ae84d2a1f2e3dd7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
