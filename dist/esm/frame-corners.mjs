export const name="frame-corners";
export const id="dl_06d72f8396aa4f758d48";
export const url=new URL("../icons/frame-corners.svg?v=76491dff75b5b3df3ffd90225e53f6f904be11d50e16fab490e69f82a1b13c78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
