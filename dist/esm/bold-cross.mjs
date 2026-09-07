export const name="bold-cross";
export const id="dl_c959b911ced0474f8914";
export const url=new URL("../icons/close/bold-cross.svg?v=84b15d2f665e40d94342a9203fb15a2039f9ad2defe77d18d2520b6fc56780bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
