export const name="jar-bold";
export const id="dl_b0d4645afb5f468a9f1b";
export const url=new URL("../icons/jar-bold.svg?v=c7840149ccdacfeaa0fb4d5b2fb8819d8e29e55eaff8f5cc7ca95b68ef8ba83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
