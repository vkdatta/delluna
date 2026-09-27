export const name="beanie-bold";
export const id="dl_6455088c44dd484ea7cc";
export const url=new URL("../icons/beanie-bold.svg?v=7eb89ec467c081a123217b87f6fc0dff77d699e50864971b959e3525459ccdaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
