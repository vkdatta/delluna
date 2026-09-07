export const name="squares-four-bold";
export const id="dl_622b789469014e99a026";
export const url=new URL("../icons/S/squares-four-bold.svg?v=db99890c7157c19dce8f9db2c9ef812c50e7ae31e3cd8fa112004eb191c8b952",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
