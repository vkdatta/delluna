export const name="matrix-logo-thin";
export const id="dl_50f83b9c87024cd38f1d";
export const url=new URL("../icons/matrix-logo-thin.svg?v=d8c53971882c60017ec2ce38cd67d43da2db45c287cb0eca8731d6e17e5767d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
