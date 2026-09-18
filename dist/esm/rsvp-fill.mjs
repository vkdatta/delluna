export const name="rsvp-fill";
export const id="dl_271df6c0e0624e319ac5";
export const url=new URL("../icons/rsvp-fill.svg?v=c14ab511e0dfa533076f3e2d03e0d52c57b330aba8c304f067bb60f18df210a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
