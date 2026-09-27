export const name="squircle-dashed";
export const id="dl_81621577ed5e4500b11f";
export const url=new URL("../icons/squircle-dashed.svg?v=bfbd48b6796caad99c51ca753a0683f21c8b2fb56197299d379adcbf2ae945e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
