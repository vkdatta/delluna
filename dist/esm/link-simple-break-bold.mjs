export const name="link-simple-break-bold";
export const id="dl_ef2587c2c01647c4a624";
export const url=new URL("../icons/link-simple-break-bold.svg?v=9863fe1d3eb4e20f09cb63730162a93436eefb19df1d2886119de64a7e0719d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
