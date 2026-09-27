export const name="align-center-vertical-bold";
export const id="dl_7c1d0b9c238e416d921b";
export const url=new URL("../icons/align-center-vertical-bold.svg?v=f1fc945f9240cf818e78038c579370389e1c17e22bbd7cdc55864b5db7257862",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
