export const name="resize-thin";
export const id="dl_57d1130531274d439b25";
export const url=new URL("../icons/resize-thin.svg?v=e6e8519e4d80147fc90aa5ad44dd9f6dec3bfcc3606699fb4eb806bfa1f35ba3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
