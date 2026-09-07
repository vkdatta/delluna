export const name="number-circle-four";
export const id="dl_8916af42dceb4e4eb5b9";
export const url=new URL("../icons/number-circle-four.svg?v=ceb97c4bd1b26608a025d81fbf48cf2f21f375bcf529cc74cf505e4a309b72ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
