export const name="not-equals-thin";
export const id="dl_95f63ffc6d6c4a11bb81";
export const url=new URL("../icons/not-equals-thin.svg?v=7940533454bee3df3c4ac7a7f032da6afbfa7b35bac6e32b82ae1099b4a82710",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
