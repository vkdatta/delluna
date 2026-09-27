export const name="cancel-fill";
export const id="dl_acb0954e715c0c750d31";
export const url=new URL("../icons/cancel-fill.svg?v=0c5dd2a9376b271e6a269220a5c71a253708c1d52ef846afa8c724695c1899d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
