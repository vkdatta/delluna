export const name="reddit-logo-bold";
export const id="dl_d493087a26514eaca064";
export const url=new URL("../icons/reddit-logo-bold.svg?v=83ed256a4aa2423da1de009229785606b92f4a1845e6d86f97a21735214bfe0c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
