export const name="arrows-in-line-horizontal";
export const id="dl_e5a8824c859d4e42aa08";
export const url=new URL("../icons/arrows-in-line-horizontal.svg?v=dec7a465beee03ce2f797e641e8eea405cb64b150bfccbdb0d07b486365cec72",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
