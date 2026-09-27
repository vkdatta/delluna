export const name="sofa";
export const id="dl_08cabc51118e6049adc0";
export const url=new URL("../icons/sofa.svg?v=1f82e5f0cccee0dbaa8321b62aa6658d821371d5cb9950ac03101332d8497593",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
